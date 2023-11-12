function addBookmark() {
    const websiteName = document.getElementById("websiteName").value;
    const websiteURL = document.getElementById("websiteURL").value;
    const category = document.getElementById("category").value;

    if (websiteName === "" || websiteURL === "") {
        alert("Please fill in both website name and URL.");
        return;
    }

    const bookmark = {
        name: websiteName,
        url: websiteURL,
        category: category
    };

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks();
    clearForm();
}

// Function to display bookmarks
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    bookmarks.forEach(bookmark => {
        const bookmarkElement = document.createElement("div");
        bookmarkElement.classList.add("bookmark");
        bookmarkElement.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <span>Category: ${bookmark.category}</span>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}


// Function to clear the form
function clearForm() {
    document.getElementById("websiteName").value = "";
    document.getElementById("websiteURL").value = "";
}

// Initial display of bookmarks
displayBookmarks();

function deleteBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    
    if (index >= 0 && index < bookmarks.length) {
        bookmarks.splice(index, 1); // Remove the bookmark at the specified index
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        displayBookmarks(); // Refresh the displayed bookmarks
    }
}

// Function to display bookmarks
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    bookmarks.forEach((bookmark, index) => {
        const bookmarkElement = document.createElement("div");
        bookmarkElement.classList.add("bookmark");
        bookmarkElement.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <span>Category: ${bookmark.category}</span>
            <button onclick="deleteBookmark(${index})">Delete</button>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}

function editBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (index >= 0 && index < bookmarks.length) {
        const editedBookmark = bookmarks[index];
        
        const newName = prompt("Edit Website Name:", editedBookmark.name);
        const newURL = prompt("Edit Website URL:", editedBookmark.url);
        const newCategory = prompt("Edit Category:", editedBookmark.category);

        if (newName && newURL) {
            editedBookmark.name = newName;
            editedBookmark.url = newURL;
            editedBookmark.category = newCategory || "Uncategorized";
            bookmarks[index] = editedBookmark;
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
            displayBookmarks();
        }
    }
}

// Function to display bookmarks
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    bookmarks.forEach((bookmark, index) => {
        const bookmarkElement = document.createElement("div");
        bookmarkElement.classList.add("bookmark");
        bookmarkElement.innerHTML = `
<h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <span>Category: ${bookmark.category}</span>
            <button onclick="editBookmark(${index})">Edit</button>
            <button onclick="deleteBookmark(${index})">Delete</button>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}

function searchBookmarksByCategory() {
    const searchTerm = prompt("Enter a category to search for:");
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (!searchTerm) return; // Handle if the user cancels the prompt

    const matchingBookmarks = bookmarks.filter(bookmark => bookmark.category.toLowerCase() === searchTerm.toLowerCase());

    if (matchingBookmarks.length === 0) {
        alert("No bookmarks found in the specified category.");
        return;
    }
    displayBookmarks(matchingBookmarks)
}

function displayBookmarks(subset) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    const bookmarksToDisplay = subset ? subset : bookmarks; // Use the subset if provided, otherwise, display all bookmarks.

    bookmarksToDisplay.forEach((bookmark, index) => {
        const bookmarkElement = document.createElement("div");
        bookmarkElement.classList.add("bookmark");
        bookmarkElement.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <span>Category: ${bookmark.category}</span>
            <button onclick="editBookmark(${index})">Edit</button>
            <button onclick="deleteBookmark(${index})">Delete</button>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}

function displayBookmarks(subset) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    const bookmarksToDisplay = subset ? subset : bookmarks;

    bookmarksToDisplay.forEach((bookmark, index) => {
        const bookmarkElement = document.createElement("div");
        bookmarkElement.classList.add("bookmark");
        bookmarkElement.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <span>Category: ${bookmark.category}</span>
            <button onclick="editBookmark(${index})">Edit</button>
            <button onclick="deleteBookmark(${index})">Delete</button>
            <button onclick="shareBookmark('${bookmark.name}', '${bookmark.url}')">Share</button>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}


function addBookmark() {
    const websiteName = document.getElementById("websiteName").value;
    const websiteURL = document.getElementById("websiteURL").value;
    const category = document.getElementById("category").value;

    if (websiteName === "" || websiteURL === "") {
        alert("Please fill in both website name and URL.");
        return;
    }

// Function to display bookmarks
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    bookmarks.forEach((bookmark, index) => {
        const bookmarkElement = document.createElement("div");
        bookmarkElement.classList.add("bookmark");
        bookmarkElement.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <span>Category: ${bookmark.category}</span>
            <button onclick="editBookmark(${index})">Edit</button>
            <button onclick="deleteBookmark(${index})">Delete</button>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}

// Function to clear the form
function clearForm() {
    document.getElementById("websiteName").value = "";
    document.getElementById("websiteURL").value = "";
}

// Initial display of bookmarks
displayBookmarks();
}

// Function to add a new bookmark
function addBookmark() {
    const websiteName = document.getElementById("websiteName").value;
    const websiteURL = document.getElementById("websiteURL").value;
    const category = document.getElementById("category").value;

    if (websiteName === "" || websiteURL === "") {
        alert("Please fill in both website name and URL.");
        return;
    }

    const bookmark = {
        name: websiteName,
        url: websiteURL,
        category: category,
        dateAdded: new Date().toISOString() // Add a timestamp for sorting if needed
    };

    // Retrieve existing bookmarks from localStorage or initialize an empty object
    const bookmarksByCategory = JSON.parse(localStorage.getItem("bookmarksByCategory")) || {};

    // Add the bookmark to the corresponding category or create a new category if it doesn't exist
    bookmarksByCategory[category] = bookmarksByCategory[category] || [];
    bookmarksByCategory[category].push(bookmark);

    // Save the updated bookmarks object back to localStorage
    localStorage.setItem("bookmarksByCategory", JSON.stringify(bookmarksByCategory));

    // Display the updated bookmarks
    displayBookmarks();
    clearForm();
}

// Function to display bookmarks by category
function displayBookmarks() {
    const bookmarksByCategory = JSON.parse(localStorage.getItem("bookmarksByCategory")) || {};

    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    for (const category in bookmarksByCategory) {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryHeader = document.createElement("h2");
        categoryHeader.textContent = category;

        categoryContainer.appendChild(categoryHeader);

        bookmarksByCategory[category].forEach((bookmark, index) => {
            const bookmarkElement = document.createElement("div");
            bookmarkElement.classList.add("bookmark");
            bookmarkElement.innerHTML = `
                <h3>${bookmark.name}</h3>
                <a href="${bookmark.url}" target="_blank">Visit</a>
                <button onclick="editBookmark('${category}', ${index})">Edit</button>
                <button onclick="deleteBookmark('${category}', ${index})">Delete</button>
            `;
            categoryContainer.appendChild(bookmarkElement);
        });

        bookmarksContainer.appendChild(categoryContainer);
    }
}

// Function to clear the form
function clearForm() {
    document.getElementById("websiteName").value = "";
    document.getElementById("websiteURL").value = "";
}

// Function to edit a bookmark in a specific category
function editBookmark(category, index) {
    // Implementation of the edit bookmark function for a specific category
}

// Function to delete a bookmark in a specific category
function deleteBookmark(category, index) {
    // Implementation of the delete bookmark function for a specific category
}

// Initial display of bookmarks
displayBookmarks();

function displayBookmarks(subset) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarksContainer.innerHTML = "";

    const bookmarksToDisplay = subset ? subset : bookmarks;

    bookmarksToDisplay.forEach((bookmark, index) => {
        const bookmarkElement = document.createElement("div");
        bookmarkElement.classList.add("bookmark");
        bookmarkElement.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <span>Category: ${bookmark.category}</span>
            <button onclick="editBookmark(${index})">Edit</button>
            <button onclick="deleteBookmark(${index})">Delete</button>
            <button onclick="shareBookmark('${bookmark.name}', '${bookmark.url}')">Share</button>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}

// Function to share a bookmark via Web Share API
function shareBookmark(name, url) {
    if (navigator.share) {
        navigator.share({
            title: name,
            url: url,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        alert('Web Share API is not supported in this browser.');
    }
}