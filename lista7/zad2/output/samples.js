var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 528 },
    { 'url': 'http://127.0.0.1:8000/accounts/', 'dir': '_m0/1', 'linked': 5, 'len': 4798 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/2', 'linked': 5, 'len': 917 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/3', 'linked': 5, 'len': 2513 },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'dir': '_m0/4', 'linked': 5, 'len': 811 },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'dir': '_m0/5', 'linked': 5, 'len': 892 },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'dir': '_m0/6', 'linked': 5, 'len': 1495 },
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m0/7', 'linked': 2, 'len': 1634 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/style.css/', 'dir': '_m1/0', 'linked': 2, 'len': 449 } ]
  }
];

var issue_samples = [
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876.xslt', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000004v707178\x3e', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/`uname`', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/7' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/8' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/announcement.xslt', 'extra': 'during path-based dictionary probes', 'sid': '0', 'dir': '_i1/9' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/done/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i1/10' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/11' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i1/12' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/13' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000009v707178\x3e', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i1/14' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i1/15' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/16' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/17' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/18' },
    { 'url': 'http://127.0.0.1:8000/static/.sf/', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i1/19' },
    { 'url': 'http://127.0.0.1:8000/static/style.css/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/20' },
    { 'url': 'http://127.0.0.1:8000/static/style.css/PUT-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i1/21' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/style.css/', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/password_reset/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://127.0.0.1:8000/static/style.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/4' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.6.7', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i8/0' } ]
  }
];

