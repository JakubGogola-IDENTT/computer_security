from django.contrib import admin
from AwesomeBank.models import PreparedTransfer
from AwesomeBank.models import Transfer

# Register your models here.
admin.site.register(PreparedTransfer)
admin.site.register(Transfer)
