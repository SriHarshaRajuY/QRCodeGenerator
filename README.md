# QR Code Generator (Node.js CLI)

This is a simple Node.js command-line application that:

- Prompts the user to enter a **URL**
- Generates a **QR code** image from the entered URL
- Saves the entered URL to a **.txt file**
- Uses **timestamped filenames** to avoid overwriting
- Includes **basic URL validation**

---

## 🔧 Technologies Used

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer) – for user input
- [qr-image](https://www.npmjs.com/package/qr-image) – for QR code generation
- [fs](https://nodejs.org/api/fs.html) – Node.js file system module

---

## 📦 Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/SriHarshaRajuY/QRCodeGenerator.git
   cd QRCodeGenerator
