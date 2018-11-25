from django.shortcuts import render, redirect
from AwesomeBank.forms import TransferForm
from AwesomeBank.models import Transfer


# Create your views here.

def transfer_sending(request):
    form = TransferForm(request.POST)
    if form.is_valid():
        form.save(sender=request.user)
        return redirect('transfer_confirm')

    form = TransferForm()
    context = {
        'form': form
    }

    return render(request, 'transfer_sending.html', context)


def transfer_confirmed(request):
    transfers = [_ for _ in Transfer.objects.all() if _.sender_id == request.user.id]
    transfers = [transfers[-1]]
    if request.method == 'POST':

        for t in transfers:
            Transfer.objects.create(recipient_name=t.recipient_name, recipient_account=t.recipient_account,
                                    amount=t.amount, sender=t.sender)
            t.delete()
        return redirect('transfer_sent')
    context = {
        'transfers': transfers
    }
    return render(request, 'transfer_confirm.html', context)


def transfer_sent(request):
    return render(request, 'transfer_sent.html')


def transfers_history(request):
    transfers = [_ for _ in Transfer.objects.all() if _.sender_id == request.user.id]
    context = {
        'transfers': transfers
    }
    return render(request, 'transfers_history.html', context)
