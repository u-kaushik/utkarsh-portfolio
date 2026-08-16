from PIL import Image, ImageDraw, ImageFont

W,H=1200,627
img=Image.new('RGB',(W,H),(248,243,235)); px=img.load()
for y in range(H):
    for x in range(W):
        t=(x+y)/(W+H)
        px[x,y]=tuple(round((251,247,240)[i]*(1-t)+(239,229,216)[i]*t) for i in range(3))
draw=ImageDraw.Draw(img)
ox=(143,47,42); ink=(42,29,24); muted=(120,102,94); pale=(255,253,249)
inter='/System/Library/Fonts/SFNS.ttf'; semibold='/System/Library/Fonts/SFNS.ttf'
serif='/System/Library/Fonts/Supplemental/Georgia.ttf'; italic='/System/Library/Fonts/Supplemental/Georgia Italic.ttf'
F=lambda path,size:ImageFont.truetype(path,size)

draw.ellipse((830,-275,1350,245),fill=(247,235,225));draw.ellipse((-300,410,190,900),fill=(247,235,225))
draw.rounded_rectangle((68,61,126,119),18,fill=ox); draw.text((97,79),'UK.',font=F(semibold,19),anchor='ma',fill=(255,249,241))
draw.text((147,69),'UTKARSH KAUSHIK',font=F(semibold,15),fill=ox)
draw.text((147,94),'Growth · GTM · Product',font=F(inter,16),fill=muted)
draw.text((68,165),'Find the signal.',font=F(serif,72),fill=ink)
draw.text((68,235),'Help the product travel.',font=F(italic,66),fill=ox)
draw.text((70,309),'Real work across B2C apps, B2B tools and marketing systems,',font=F(inter,19),fill=(101,84,77))
draw.text((70,340),'from customer research through to launch and learning.',font=F(inter,19),fill=(101,84,77))
draw.rounded_rectangle((68,491,278,561),35,fill=ox);draw.text((173,526),'View The Portfolio ↗',font=F(semibold,15),anchor='mm',fill=(255,249,241))
draw.text((306,505),'RESEARCH TO USERS',font=F(semibold,13),fill=ox)
draw.text((306,531),'Positioning · Launches · Systems',font=F(inter,14),fill=muted)

draw.rounded_rectangle((815,82,1130,547),34,fill=pale,outline=(216,201,187),width=2)
for y in range(100,338):
    t=(y-100)/238
    c=tuple(round((121,43,39)[i]*(1-t)+(55,23,20)[i]*t) for i in range(3))
    draw.line((833,y,1112,y),fill=c)
draw.ellipse((870,137,978,245),outline=(244,201,163),width=12);draw.ellipse((900,167,948,215),fill=(255,248,239))
draw.rounded_rectangle((1001,149,1087,159),5,fill=(255,248,239));draw.rounded_rectangle((1001,173,1064,181),4,fill=(148,117,108));draw.rounded_rectangle((1001,198,1099,206),4,fill=(148,117,108));draw.rounded_rectangle((1001,223,1076,231),4,fill=(148,117,108))
draw.text((847,370),'SELECTED WORK',font=F(semibold,11),fill=(154,137,128))
draw.text((847,408),'Product to growth',font=F(serif,31),fill=ink)
draw.text((847,447),'B2C · B2B · Marketing Systems',font=F(inter,14),fill=muted)
draw.line((847,487,1098,487),fill=(222,210,198))
draw.text((847,507),'GROWTH, GTM & PRODUCT PORTFOLIO',font=F(semibold,11),fill=ox)
img.save('/Users/utkarshkaushik/Projects/utkarsh-portfolio/public/media/linkedin-portfolio-thumbnail.png',quality=95)
