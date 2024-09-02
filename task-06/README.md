# OpenDocs
This repository serves as an example for Task-06 of amFoss Praveshan 2024. The repository used for this example is the [PySimpleGUI](https://github.com/PySimpleGUI/PySimpleGUI) application, a library for creating simple GUIs with Python, designed to make GUI programming more accessible.

## PySimpleGUI:User Interface for Humans

### Overview
PySimpleGUI is a powerful toolkit that simplifies desktop application development by enhancing existing frameworks like tkinter, Qt, WxPython, and Remi. It offers:

- **Simplified UI Design**: Defines user interfaces using core Python data types (lists and dictionaries), making it beginner-friendly.
- **Simplified Event Handling**: Uses a straightforward message passing model instead of complex callbacks.
- **Minimal Code Requirements**: Eliminates the need for object-oriented programming and reduces code complexity.

## Features

- **Create Windows**: Easily design and display application windows.
- **User Input**: Collect and process user input with various GUI elements.
- **Dialogs**: Show informational and confirmation dialogs.
- **Event Handling**: Manage user interactions and events.


### Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/PySimpleGUI/PySimpleGUI
   cd PySimplegui

2. **Create a Virtual Environment:**
   ```python -m venv env
   python3 -m venv env
   source env/bin/activate

3. **Install Dependencies:**
   ```bash
   python -m pip install pysimplegui

4. **Run this code**
    ```bash
    
    import PySimpleGUI as sg
    
    # All the stuff inside your window.
    layout = [  [sg.Text('Some text on Row 1')],
                [sg.Text('Enter something on Row 2'), sg.InputText()],
                [sg.Button('Ok'), sg.Button('Cancel')] ]
    
    # Create the Window
    window = sg.Window('Window Title', layout)
    
    # Event Loop to process "events" and get the "values" of the inputs
    while True:
        event, values = window.read()
        if event == sg.WIN_CLOSED or event == 'Cancel': # if user closes window or clicks cancel
            break
        print('You entered ', values[0])
    
    window.close()
    
5. **This opens up the PySimpleGUI application**


### Usage
- **Create Window**: Open app.py to see an example of how to create and display a window using PySimpleGUI.
- **User Input**: Use the provided text fields and buttons to interact with the GUI.
- **Dialogs**: Test various dialogs to understand how PySimpleGUI handles user interactions.

### Contribution Guidelines
- **Reporting Issues:** Please report any issues or bugs using the GitHub Issues tab.
- **Submitting Pull Requests:** Fork the repository, make your changes, and submit a pull request with a description of your changes.


