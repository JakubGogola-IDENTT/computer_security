from django.contrib.auth.models import User, Group
from django.core.validators import RegexValidator
from django.utils import timezone
from rest_framework import serializers
from AwesomeBank.models import Transfer, PreparedTransfer


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class TransfersHistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Transfer
        fields = ('recipient_name', 'recipient_account', 'title', 'amount', 'date')


class TransferSendingSerializer(serializers.HyperlinkedModelSerializer):
    sender = serializers.SerializerMethodField('_user')

    def _user(self, obj):
        request = getattr(self.context, 'request', None)
        if request:
            return request.user.username

    class Meta:
        model = PreparedTransfer
        fields = ('sender', 'recipient_name', 'recipient_account', 'title', 'amount', 'date')


class TransferConfirmedSerializer(serializers.HyperlinkedModelSerializer):
    sender = serializers.SerializerMethodField('_user')

    def _user(self, obj):
        request = getattr(self.context, 'request', None)
        if request:
            return request.user.username

    class Meta:
        model = Transfer
        fields = ('sender', 'recipient_name', 'recipient_account', 'title', 'amount', 'date')
