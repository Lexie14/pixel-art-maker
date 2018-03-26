// Function for creating a grid
$('#sizePicker').submit(function makeGrid(event) {

    // Prevent a click on submit button from reloading a page
    event.preventDefault();

    // Grab values for the grid dimensions
    let height = $('#input_height').val();
    let width = $('#input_width').val();

    //Declare a 'grid' variable
    let grid = $('#pixel_canvas');

    //  Limit the grid's dimensions
    // if (height > 50 || width > 50 || height < 1 || width < 1) {
        // alert("Grid dimensions' range has to be between 1 and 50");
    // } else {

        // Clear table cells
        grid.empty();

        // Change button's name after clicking on "Make a table"
        $('#submit-button').val("Clear a table");

        // Change button's name on the change in the input fields (<form>) back to "Make a table"
        $('form').change(function() {
            $('input[type="submit"][value="Clear a table"]').val("Make a table");
        });

        // Build a grid
        for (let r = 0; r < height; r++) {
            grid.append('<tr></tr>');
        }
        for (let c = 0; c < width; c++) {
            grid.find('tr').append('<td></td>');
        }

        // Fill a cell with a color/clear a cell depending on a right/left mouse click
        $('td').mousedown(function(event) {
            if (event.which === 1) {
                let color = $('#colorPicker').val();
                $(this).css('background-color', color);
            } else {
                event.preventDefault();
                $(this).css('background-color', 'rgba(236, 217, 198, 0.4)');
            }
        });
    // } this part is from if else statement about the max input value

    // Paint multiple cells via dragging
    $('td').mousedown(function(e) {
      e.preventDefault();
        if (e.which === 1) {
            $('td').on("mouseover", function() {
                let color = $('#colorPicker').val();
                $(this).css('background-color', color);
            });
        }
    });

    // Stop painting
    $('html').mouseup(function() {
        $('td').off("mouseover");
    });

    //   Clear muptiple cells via dragging
    $('td').mousedown(function(e) {
        if (e.which === 3) {
            $('td').on("mouseover", function() {
                $(this).css('background-color', 'rgba(236, 217, 198, 0.4)');
            });
        }
    });

    // Stop clearing
    $('html').off('contextmenu', function() {
        $('td').off("mouseover");
    });

    //   Prevent right mouse click from a default event
    grid.on('contextmenu', function(event) {
        event.preventDefault();
    });

});
