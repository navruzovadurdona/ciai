import turtle

turtle.title("rainbow")
turtle.bgcolor("black")
turtle.colormode(255)

t = turtle.Turtle()
t.speed(0)

r, g, b = 255, 0, 0

for i in range(255 * 2):
    if i < 255 // 3:
        g += 3
    elif i < 255 * 2 // 3:
        r -= 3
    elif i < 255:
        b += 3
    elif i < 255 * 4 // 3:
        g -= 3
    elif i < 255 * 5 // 3:
        r += 3
    else:
        b -= 3

    r = max(0, min(255, r))
    g = max(0, min(255, g))
    b = max(0, min(255, b))

    t.pencolor(r, g, b)
    t.forward(50 + i)
    t.right(91)

turtle.done()
