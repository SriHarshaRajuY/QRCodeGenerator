import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

// Generate timestamp for unique filenames
function getTimestamp() {
    const now = new Date();
    return now.toISOString().replace(/[:.]/g, "-");
}

//Basic URL validation
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

inquirer
    .prompt([
        {
            message: "Type in your URL: ",
            name: "URL",
            validate: function(input) {
                return isValidURL(input) || "Please enter a valid URL.";
            }
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        const timestamp = getTimestamp();

        // File names with timestamp
        const qrFileName = `qr_${timestamp}.jpg`;
        const txtFileName = `URL_${timestamp}.txt`;

        // Generate QR image
        const qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream(qrFileName));

        // Save URL to a text file
        fs.writeFile(txtFileName, url, (err) => {
            if (err) {
                console.error("Error writing text file:", err);
                return;
            }
            console.log("\n✅ Success!");
            console.log(`QR code image saved as: ${qrFileName}`);
            console.log(`URL saved to file: ${txtFileName}\n`);
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    });

/*
1. Uses inquirer to prompt for a URL.
2. Validates the input as a valid URL.
3. Generates a QR image using qr-image.
4. Writes both QR image and URL text file with unique timestamp-based filenames.
5. Displays clean, simple success or error messages.
*/
