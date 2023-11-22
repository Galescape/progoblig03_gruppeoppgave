use context essentials2021
background = rectangle(200, 200, "solid", "white")
background2 = overlay-align("middle", "top", rectangle(200, 125, "solid", "blue"), background)

#lager snømann
bunn = circle(30, "solid", "white")
top = circle(20, "solid", "white")

#lager nese snømann
nese = ellipse(20, 4, "solid", "orange")

#lager øyne snømann
oyne = circle(3, "solid", "black")

#setter sammen snømann
snomann = above(top, bunn)
snomann2 = underlay-xy(snomann, 30, 18, nese)
ferdig-snomann = underlay-xy(snomann2, 35, 7, oyne)

#lager sol
sol = circle(25, "solid", "yellow")

#setter sammen alt på bakgrunn
snomann-uten-sol = underlay-xy(background2, 10, 30, ferdig-snomann)
finito = underlay-xy(snomann-uten-sol, 120, 15, sol)

