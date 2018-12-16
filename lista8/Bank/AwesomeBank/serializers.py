from django.contrib.auth.models import User, Group
from rest_framework import serializers

from AwesomeBank.models import Transfer, PreparedTransfer


class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password')

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


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
