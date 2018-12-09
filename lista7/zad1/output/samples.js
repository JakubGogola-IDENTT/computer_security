var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 528 },
    { 'url': 'http://127.0.0.1:8000/accounts/', 'dir': '_m0/1', 'linked': 5, 'len': 4385 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/2', 'linked': 5, 'len': 917 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/3', 'linked': 5, 'len': 2513 },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'dir': '_m0/4', 'linked': 5, 'len': 811 },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'dir': '_m0/5', 'linked': 5, 'len': 1495 },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'dir': '_m0/6', 'linked': 5, 'len': 178922 },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/', 'dir': '_m0/7', 'linked': 1, 'len': 2982 },
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m0/8', 'linked': 2, 'len': 1634 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/style.css/', 'dir': '_m1/0', 'linked': 2, 'len': 449 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m2/0', 'linked': 2, 'len': 59 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/2' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876.xslt', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/bogus%0ASkipfish-Inject:bogus', 'extra': 'Header injection', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/`false`', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/archive/', 'extra': 'during path-based dictionary probes', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/done/sfi9876/', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://127.0.0.1:8000/accounts/sfi9876/done/', 'extra': 'during parent checks', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/done/9-1', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/sfi9876/', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/19' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/20' },
    { 'url': 'http://127.0.0.1:8000/home/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/21' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/22' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/23' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i2/24' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/25' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i2/26' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/27' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/contrib/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/28' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/contrib/auth/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/29' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/contrib/auth/forms.py', 'extra': 'during initial resource fetch', 'sid': '0', 'dir': '_i2/30' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/core/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/31' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/core/handlers/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i2/32' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/db/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/33' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/db/backends/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/34' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/db/backends/sqlite3/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/35' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/db/models/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/36' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/db/models/sql/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/37' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/views/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/38' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/views/generic/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/39' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i2/40' },
    { 'url': 'http://127.0.0.1:8000/static/style.css/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/41' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/static/style.css/', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i6/3' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/5' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://127.0.0.1:8000/static/style.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/4' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/2' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.6.7', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://127.0.0.1:8000/home/jakub/.local/lib/python3.6/site-packages/django/', 'extra': 'WSGIServer/0.2 CPython/3.6.7', 'sid': '0', 'dir': '_i10/1' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i11/0' } ]
  }
];

