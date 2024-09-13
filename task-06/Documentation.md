# Documentation for PySimpleGUI

## Project Overview

**PySimpleGUI** is a Python library that provides a interface for creating graphical user interfaces (GUIs). It simplifies GUI programming by abstracting the details of backend frameworks like Tkinter, Qt, WxPython, and Remi, making GUI development accessible even for beginners. Users can efficiently develop windows and applications with minimal code. 

### Key Features:
- **Multi-platform Support**: Runs on Windows, Mac, and Linux.
- **Supports Multiple Backends**: Supports Tkinter, Qt, WxPython, and Remi for web GUIs.
- **User-Friendly API**: Simplifies the creation of GUI elements like buttons and sliders.
- **Versatile**: Suitable for simple apps and complex dashboards.
- **Customisable Themes**: Built-in theme support for customizing the appearance of your GUI.
- **Active Windows**: Windows stay open during user interactions, ideal for real-time apps.

---

## Project Purpose

PySimpleGUI is intended to make GUI creation in Python simpler and faster. It helps users of all sorts to create GUI platforms without delving into the the complexities of GUI programmming.

---

## Modules Overview

### 1. **`PySimpleGUI.py`**
This is the core module that handles the creation of windows, buttons, layouts, and other GUI elements. It abstracts the underlying backends (Tkinter, Qt, WxPython, etc.) to offer a unified interface to the user.

- **Key Functions**:
  - `Window(layout)`: Creates a window from a layout structure.
  - `Button()`: Defines a clickable button in the interface.
  - `Input()`: Defines an input field where users can enter text.
  - `Combo()`: Creates a drop-down selection menu.
  - `Slider()`: Allows for numeric value selection within a specified range.
  - `Theme()`: Allows the user to apply pre-defined or custom themes to change the look and feel of the window.

### 2. **`PySimpleGUIQt.py`**
This module provides support for the Qt backend, allowing users to create GUIs using the Qt framework instead of Tkinter.

- **Key Features**:
  - Widgets and elements in Qt are highly customizable and provide a modern look compared to Tkinter.
  - Functionality mirrors the Tkinter-based version but uses PyQt5 as the underlying engine.

### 3. **`PySimpleGUIWx.py`**
This module integrates WxPython as the backend for GUIs, offering another alternative to Tkinter and Qt.

- **Key Functions**:
  - Similar functions to `PySimpleGUI.py`, but backed by the WxPython framework.
  - Provides greater customization for native-looking applications on Windows and Linux.

### 4. **`PySimpleGUIWeb.py`**
This module extends PySimpleGUI to run in web browsers, using the Remi framework. It enables developers to run their GUIs in a web environment, allowing users to interact via a browser.

- **Key Functions**:
  - `Window(layout)`: Generates a web-based window.
  - `Button()`, `Input()`, etc., are also available for web interfaces.


## Core Functions and Usage in PySimpleGUI

### 1. **`Window()`**

- **Usage**:
    ```python
    window = sg.Window('Window Title', layout)
    ```
- **Description**: Creates a window with a given title and layout. The layout defines the structure of the window's elements.

### 2. **`Button()`**

- **Usage**:
    ```python
    button = sg.Button('Click Me')
    ```
- **Description**: Creates a clickable button that can be placed in the window layout.

### 3. **`Layout()`**

- **Usage**:
    ```python
    layout = [[sg.Text('Hello World')], [sg.Button('OK')]]
    ```
- **Description**: Defines the layout of the window. In this example, it consists of a text element (`Text()`) in the first row and a button (`Button()`) in the second row.

## How to Use PySimpleGUI

### **Installing PySimpleGUI**
#### To use PySimpleGUI, you need to install it via pip:
  ```python
  pip install PySimpleGUI
  ```
## Creating a Simple GUI 
#### Example of how to create a basic window with a button and an input field:
  ```python
  import PySimpleGUI as sg
  
  layout = [[sg.Text('Enter something:')],
            [sg.Input()],
            [sg.Button('Submit')]]
  
  window = sg.Window('Sample App', layout)
  
  while True:
      event, values = window.read()
      if event == sg.WIN_CLOSED:
          break
  
  window.close()
  ```
## Themes
#### You can set a theme using:
  ```python
  sg.theme('DarkAmber')
  ```

