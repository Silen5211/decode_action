import bz2, base64
exec(bz2.decompress(base64.b64decode('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')))
# Created by pyminifier (https://github.com/dzhuang/pyminifier3)

