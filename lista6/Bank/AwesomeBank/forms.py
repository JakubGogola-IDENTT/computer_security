from django import forms
from AwesomeBank.models import PreparedTransfer


class TransferMetaForm(forms.ModelForm):
    def save(self, sender, commit=True):
        instance = super(TransferMetaForm, self).save(commit=False)
        instance.sender = sender

        if commit:
            instance.save()
            self.save_m2m()

        return instance


class TransferForm(TransferMetaForm):
    class Meta:
        model = PreparedTransfer
        fields = [
            'recipient_name',
            'recipient_account',
            'title',
            'amount',
            'date'
        ]
