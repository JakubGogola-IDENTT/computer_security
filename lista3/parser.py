def parse(s):
    args = s.split()

    res = {}
    for arg in args:
        if 'PHPSESSID=' in arg:
            tmp = arg.replace('\"', '').replace(";", '').split('=')
            res[tmp[0]] = tmp[1]

    return res


