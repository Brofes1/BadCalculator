class Window
{
    /** Resizes the canvas to the window size. */
    static ResizeCanvas()
    {
        gameCanvas.width = window.innerWidth;
        gameCanvas.height = window.innerHeight;

        Window.width = gameCanvas.width;
        Window.height = gameCanvas.height;
    }
}