"""Bank URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from rest_framework import routers
from AwesomeBank.views import transfer_sending, transfer_confirmed, transfer_sent, transfers_history, \
    TransfersHistoryViewSet, transfer_sending_api, transfer_confirmed_api

router = routers.DefaultRouter()
router.register('api/transfers_history', TransfersHistoryViewSet)
# router.register('api/transfer_sending', transfer_sending_api)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('transfer/', transfer_sending, name='transfer_sending'),
    path('transfer_confirm/', transfer_confirmed, name='transfer_confirm'),
    path('transfer_sent/', transfer_sent, name='transfer_sent'),
    path('transfers_history', transfers_history, name='transfers_history'),
    path('api/transfer_sending/', transfer_sending_api, name='api_transfer_sending'),
    path('api/transfer_confirmed/', transfer_confirmed_api, name='api_transfer_confirmed'),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^api/token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^api/token/verify/$', TokenVerifyView.as_view(), name='token_verify')
]
