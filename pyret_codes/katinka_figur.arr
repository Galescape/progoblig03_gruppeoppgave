use context essentials2021
a = put-image(isosceles-triangle(140, 80, "outline", "royal-blue"), 125, 150, rectangle(250, 300, "solid", "dark blue"))

b = overlay-align("middle", "middle",
  triangle-sss(140, 140, 180, "outline", "blue"), a)

c = overlay-align("middle", "middle",
  square(48, "outline", "sky-blue"), b)

c