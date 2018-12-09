from django.contrib.auth.decorators import user_passes_test
from django.shortcuts import render, redirect
from AwesomeBank.forms import TransferForm, SQLInjectionForm
from AwesomeBank.models import PreparedTransfer, Transfer
from django.db import connection
from django.views.decorators.csrf import csrf_exempt
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


@csrf_exempt
@user_passes_test(lambda user: user.is_superuser)
def admin_transfer_confirmed(request):
    prepared_transfers = []

    for item in PreparedTransfer.objects.all():
        prepared_transfers.append(item)

    if request.method == 'POST':

        for t in prepared_transfers:
            Transfer.objects.create(recipient_name=t.recipient_name, recipient_account=t.recipient_account,
                                    title=t.title, amount=t.amount, sender=t.sender)
            t.delete()
        return redirect('admin_sent')

    context = {
        'transfers': prepared_transfers
    }
    return render(request, 'admin_confirmation.html', context)


@csrf_exempt
@user_passes_test(lambda user: user.is_superuser)
def admin_transfer_sent(request):
    transfers = []
    for item in Transfer.objects.all():
        transfers.append(item)

    transfers = [transfers[-1]]

    context = {
        'transfers': transfers
    }

    return render(request, 'admin_sent.html', context)


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


def sql_injection(request):
    form = SQLInjectionForm()

    if request.method == 'POST':
        form = SQLInjectionForm(request.POST)

        if form.is_valid():
            data = form.cleaned_data
            qry = data.get('query')

            with connection.cursor() as c:
                c.execute(qry)

                context = {
                    'form': form,
                    'response': c.fetchall()
                }

                return render(request, 'sql_injection.html', context)

    context = {
        'form': form,
        'response': {}
    }

    return render(request, 'sql_injection.html', context)

