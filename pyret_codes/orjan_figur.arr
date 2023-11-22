use context essentials2021
lys = "pale-green"
g1 = "aquamarine"
g2 = "medium-sea-green"
g3 = "sea-green"
g4 = "forest-green"
g5 = "dark-green"
s = "solid"
w = 540
h = 135

moon = overlay(circle(80, "solid", "ivory"), circle(100, "solid", "light-goldenrod-yellow"))

bgl1 = rectangle(w, w, s, lys)
bgl2 = rectangle(w, h, s, g1)
bgl3 = rectangle(w, h, s, g2)
bgl4 = rectangle(w, h, s, g3)
bgl5 = rectangle(w, h, s, g4)

background = put-image(bgl4, 270, 472.5, 
  put-image(bgl3, 270, 337.5, 
    put-image(bgl2, 270, 202.5, 
      empty-color-scene(540, 540, lys))))

image = put-image(isosceles-triangle(600, 40, "solid", g5), 470, 0, 
  put-image(isosceles-triangle(600, 40, "solid", g5), 70, 0, 
    put-image(isosceles-triangle(900, 50, "solid", g5), 270, 0, 
      put-image(moon, 270, 400, background))))

image

put-image(isosceles-triangle(900, 50, "solid", g5), 270, 0, 
      put-image(moon, 270, 400, background))
