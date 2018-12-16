from django.http import JsonResponse
from django.shortcuts import render, redirect
from rest_framework import mixins
from rest_framework import viewsets
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication

from AwesomeBank.forms import TransferForm
from AwesomeBank.models import PreparedTransfer, Transfer
from AwesomeBank.serializers import TransfersHistorySerializer, TransferSendingSerializer, TransferConfirmedSerializer, \
    UserSerializer


# Create your views here.


def transfer_sending(request):
    if request.method == 'POST':
        form = TransferForm(request.POST)
        if form.is_valid():
            form.save(sender=request.user)
            return redirect('transfer_confirm')
    else:
        form = TransferForm()

    context = {
        'form': form
    }

    return render(request, 'transfer_sending.html', context)


def transfer_confirmed(request):
    prepared_transfers = []

    for item in PreparedTransfer.objects.all():
        if item.sender_id == request.user.id:
            prepared_transfers.append(item)

    if request.method == 'POST':

        for t in prepared_transfers:
            Transfer.objects.create(recipient_name=t.recipient_name, recipient_account=t.recipient_account,
                                    title=t.title, amount=t.amount, sender=t.sender)
            t.delete()
        return redirect('transfer_sent')

    context = {
        'transfers': prepared_transfers
    }
    return render(request, 'transfer_confirm.html', context)


def transfer_sent(request):
    transfers = []
    for item in Transfer.objects.all():
        if item.sender_id == request.user.id:
            transfers.append(item)

    transfers = [transfers[-1]]

    context = {
        'transfers': transfers
    }

    return render(request, 'transfer_sent.html', context)


def transfers_history(request):
    transfers = []
    for item in Transfer.objects.all():
        if item.sender_id == request.user.id:
            transfers.append(item)

    context = {
        'transfers': transfers
    }
    return render(request, 'transfers_history.html', context)


# Views for REST API

@api_view(['GET'])
@authentication_classes((JWTAuthentication,))
@permission_classes((IsAuthenticated,))
def transfers_history_api(request):
    if request.method == 'GET':
        transfers = Transfer.objects.all()
        serializer = TransfersHistorySerializer(transfers, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['POST'])
@authentication_classes((JWTAuthentication, ))
@permission_classes((IsAuthenticated, ))
def transfer_sending_api(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TransferSendingSerializer(data=data)
        if serializer.is_valid():
            serializer.save(sender=request.user)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@api_view(['POST'])
@authentication_classes((JWTAuthentication,))
@permission_classes((IsAuthenticated,))
def transfer_confirmed_api(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TransferConfirmedSerializer(data=data)
        if serializer.is_valid():
            serializer.save(sender=request.user)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@api_view(['POST'])
@permission_classes((AllowAny, ))
def user_registration_api(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
