// Lets Assume data from Backend API which is in json format we have header and table data source
const jsonData = {
    "headers": ["Invoice", "Billing Date", "Status", "Amount", "Plan"],
    data:
        [
            {
                "invoice": "Invoice #011 - Jun 2026",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic",
            },
            {
                "invoice": "Invoice #010 - May 2026",
                "billingDate": "June 24, 2026",
                "status": "Paid",
                "amount": "USD $35.00",
                "plan": "Pro",
            },
            {
                "invoice": "Invoice #009 - Apr 2026",
                "billingDate": "June 25, 2026",
                "status": "Failed",
                "amount": "USD $40.00",
                "plan": "Premium",
            },
            {
                "invoice": "Invoice #008 - Mar 2026",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $15.00",
                "plan": "Elite"
            },
            {
                "invoice": "Invoice #007 - Feb 2026",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Pro"
            },
            {
                "invoice": "Invoice #006 - Jan 2026",
                "billingDate": "June 25, 2026",
                "status": "Failed",
                "amount": "USD $35.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #005 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },



            {
                "invoice": "Invoice #005 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #015 - Jan 2025",
                "billingDate": "Dec 25, 2026",
                "status": "Failed",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #012 - Dec 2026",
                "billingDate": "June 25, 2026",
                "status": "Failed",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #113 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $125.00",
                "plan": "Pro"
            },
            {
                "invoice": "Invoice #114 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $45.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #115 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $1125.00",
                "plan": "Permium"
            },
            {
                "invoice": "Invoice #116 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Failed",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #117 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #118 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #119 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #120 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #121 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #122 - Dec 2025",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic"
            },
            {
                "invoice": "Invoice #123 - Jun 2026",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $25.00",
                "plan": "Basic",
            },
            {
                "invoice": "Invoice #124 - May 2026",
                "billingDate": "June 25, 2026",
                "status": "Paid",
                "amount": "USD $35.00",
                "plan": "Pro",
            },
            {
                "invoice": "Invoice #303 - Apr 2026",
                "billingDate": "June 25, 2026",
                "status": "Failed",
                "amount": "USD $40.00",
                "plan": "Premium",
            },
            {
                "invoice": "Invoice #404 - Mar 2026",
                "billingDate": "June 25, 2026",
                "status": "Failed",
                "amount": "USD $15.00",
                "plan": "Elite"
            }
        ]
};

//Function for invoice status paid, failed and same component being used for showing invoice counts
function statusComponent(state, val) {
    const value = val;
    const componentType = state;
    const statusElement = document.createElement('p');
    statusElement.classList.add('status', componentType);
    statusElement.textContent = value;
    return statusElement;
}

// Example onExport and onDownload throwing an error  
function donwLoadExport(button) {
    console.error(`Unable to ${button} the files`);
}


// Table sorting based on table header id 
function sortTableColumn() {
    const currentColumn = Number(this.id)
    const table = document.getElementById("invoiceTable");
    let rows = Array.from(table.rows).slice(1);
    let ascending = true;

    // Check if table already sorted or not
    if (table.dataset.sortColumn == currentColumn) {
        ascending = table.dataset.sortOrder === "asc" ? false : true;
    }

    rows.sort((a, b) => {
        console.log(typeof (currentColumn));
        let cellA = a.cells[currentColumn].innerText.trim();
        let cellB = b.cells[currentColumn].innerText.trim();

        //Since this is Amount section considering number sorting here
        if (currentColumn === 3) {
            cellA = parseFloat(cellA.replace(/[^\d.-]/g, ""));
            cellB = parseFloat(cellB.replace(/[^\d.-]/g, ""));
        } else if (currentColumn === 1) { // Date section considering date we need to change it new date
            console.log(new Date(cellA));
            cellA = new Date(cellA);
            cellB = new Date(cellB);
        }

        return ascending ? (cellA > cellB ? 1 : -1) : (cellA < cellB ? 1 : -1);
    });

    table.dataset.sortColumn = currentColumn;
    table.dataset.sortOrder = ascending ? "asc" : "desc";
    rows.forEach(row => table.tBodies[0].appendChild(row));
}

/* Table creation functionality
 Create table header row using dataSource.headers */

function createTableHeader(data) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    data.forEach((item, index) => {
        const th = document.createElement('th');
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('headerCheckboxThWrapper');

        if (index == 0) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.setAttribute('id', 'headrcheckbox');
            checkbox.addEventListener('change', selectAllCheckbox);
            wrapperDiv.appendChild(checkbox);
        }
        const paragraph = document.createElement('p');
        paragraph.textContent = item;
        wrapperDiv.appendChild(paragraph);
    
        const sortIcon = document.createElement('div');
        sortIcon.classList.add('svgWrapper');
        sortIcon.setAttribute('id', index);
        sortIcon.addEventListener('click', sortTableColumn);
        const Icon  =`<svg xmlns="http://www.w3.org/2000/svg" 
        shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
         image-rendering="optimizeQuality" fill-rule="evenodd" 
         clip-rule="evenodd" viewBox="0 0 322 511.21">
         <path fill-rule="nonzero" d="M295.27 211.54H26.71c-6.23-.02-12.48-2.18-17.54-6.58-11.12-9.69-12.29-26.57-2.61-37.69L144.3 
         9.16c.95-1.07 1.99-2.1 3.13-3.03 11.36-9.4 28.19-7.81 37.58 3.55l129.97 157.07a26.65 26.65 0 0 1 7.02 18.06c0 14.76-11.97
          26.73-26.73 26.73zM26.71 299.68l268.56-.01c14.76 0 26.73 11.97 26.73 26.73 0 6.96-2.66 13.3-7.02 18.06L185.01 501.53c-9.39 
          11.36-26.22 12.95-37.58 3.55-1.14-.93-2.18-1.96-3.13-3.03L6.56
           343.94c-9.68-11.12-8.51-28 2.61-37.69 5.06-4.4 11.31-6.56 17.54-6.57z"/></svg>`;
        sortIcon.innerHTML =  Icon;
        wrapperDiv.appendChild(sortIcon);
        th.appendChild(wrapperDiv);
        headerRow.appendChild(th);

    });
    thead.appendChild(headerRow);
    return thead;
}
// table body creation function
function createtable(dataToDisplay) {
    // Get the reference of the id where we want to render the Table in UI
    const container = document.getElementById('tableContainer');
    container.innerHTML = '';
    // Create table element and append table header
    const table = document.createElement('table');
    table.setAttribute('id', 'invoiceTable');
    table.appendChild(createTableHeader(jsonData.headers));

    // Create table body using dataToDisplay args
    const tbody = document.createElement('tbody');
    dataToDisplay.forEach(rowData => {
        const row = document.createElement('tr');

        // Populate each cell
        Object.keys(rowData).forEach(key => {
            const td = document.createElement('td');
            switch (key) {
                case 'status':
                    const status = statusComponent(rowData[key].toLowerCase(), rowData[key]);
                    td.appendChild(status);
                    break;
                case 'invoice':
                    const invoiceSection = document.createElement('div');
                    invoiceSection.classList.add('tableInvoiceSection');

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.classList.add('checkbox','invoicItemCheck');
                    checkbox.addEventListener('change', onChecked);
                    invoiceSection.appendChild(checkbox);

                    const pdfIcon = document.createElement('div');
                    pdfIcon.classList.add('currentPage');
                    const svgCode = ` <svg xmlns="http://www.w3.org/2000/svg" 
             shape-rendering="geometricPrecision" 
             text-rendering="geometricPrecision" 
             image-rendering="optimizeQuality" 
             fill-rule="evenodd" 
             clip-rule="evenodd" 
             viewBox="0 0 398 512.188">
            <path fill="#4f45e5" 
                  stroke="#4f45e5" 
                  stroke-width="2" 
                  fill-rule="nonzero" 
                  d="M59.904 0H277.45a9.13 9.13 0 017.303 3.641l110.781 119.851a9.069 
                  9.069 0 012.419 6.179H398v322.613c0 16.401-6.783 31.384-17.651 42.253-10.87 10.87-25.855 17.651-42.255 17.651H59.904c-16.421 0-31.422-6.756-42.294-17.628C6.763 483.714 0 
                  468.75 0 452.284V59.906C0 43.422 6.739 28.44 17.59 17.59 28.44 6.739 43.42 0 59.904 0zM18.289 339.085h361.422V147.794c-30.513 0-71.711 4.559-96.489-16.605-12.663-10.821-19.766-26.266-21.174-45.471a9.129 9.129 0
                  01-.086-1.254V18.289H59.904c-11.435 0-21.839 4.686-29.384 12.231-7.545 7.544-12.231 17.949-12.231 29.386v279.179zm361.422 18.495H18.289v94.704c0 11.413 4.705 21.802 12.251 29.347 7.566 7.566 17.984 12.268 29.364 
                  12.268h278.19c11.355 0 21.757-4.723 29.325-12.292 7.569-7.569 12.292-17.969
                  12.292-29.323V357.58zm-68.556-109.127H287.47v32.322h-27.864v-87.076h57.121l-3.483 22.292H287.47v11.703h23.685v20.759zM166.61
                  280.775v-87.076h39.008c15.698 0 26.472 3.345 32.322 10.033 5.853 6.686 8.78 17.854 8.78 33.505 0 15.651-2.927 26.819-8.78 33.507-5.85 6.688-16.624
                  10.031-32.322 10.031H166.61zm39.427-64.784h-11.564v42.493h11.564c3.809 0 6.571-.44 8.289-1.323 1.718-.882 2.579-2.903
                  2.579-6.06v-27.725c0-3.158-.861-5.178-2.579-6.061-1.718-.882-4.48-1.324-8.289-1.324zm-78.785 43.747h-18.111v21.037H81.277v-87.076h43.886c19.969 
                  0 29.952 10.728 29.952 32.184 0 11.796-2.6 20.526-7.801 26.192-1.949 2.136-4.644 3.949-8.08 5.433-3.436 1.488-7.431 2.23-11.982 2.23zm-18.111-43.747v21.456h6.409c3.343 0 5.782-.348 7.314-1.045 1.533-.697 2.299-2.298 
                  2.299-4.806v-9.753c0-2.507-.766-4.111-2.299-4.806-1.532-.697-3.971-1.046-7.314-1.046h-6.409zm11.322 219.91c-5.207 
                  0-9.43-4.224-9.43-9.431 0-5.207 4.223-9.431 9.43-9.431H273.73c5.207 0 9.431 4.224 9.431 9.431 0 5.207-4.224 9.431-9.431 9.431H120.463zM280.25 25.577v58.847c1.041 14.194
                  6.017 25.376 14.832 32.907 19.07 16.285 57.587 12.174 81.231 12.174L280.25 25.577z"/>
        </svg>`;
                    pdfIcon.innerHTML = svgCode;
                    invoiceSection.appendChild(pdfIcon)

                    const paragraph = document.createElement('p');
                    paragraph.textContent = rowData[key];
                    invoiceSection.appendChild(paragraph);

                    td.appendChild(invoiceSection)
                    break;
                default:
                    td.textContent = rowData[key];
            }
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Add table to main wrapper
    container.appendChild(table);
}

//pagination functionality starts from here
const paginationLimit = 7;
const pageCount = Math.ceil(jsonData.data.length / paginationLimit);
let currentPage = 1;


// slice the jsonData.data to display as per paginationLimit
function getPageData() {
    const firstPage = (currentPage - 1) * paginationLimit;
    const lastPage = firstPage + paginationLimit;
    const dataToDisplay = jsonData.data.slice(firstPage, lastPage);
    createtable(dataToDisplay);
}


//Function to create dynamic pagination buttons based on jsonData.data 
function createPageNumbers() {
    const pageNumbersRef = document.getElementById("paginationNumbers");
    pageNumbersRef.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const dynamicPage = document.createElement("div");
        dynamicPage.textContent = i;
        dynamicPage.classList.add("dynamicPage");

        if (i === currentPage) {
            dynamicPage.classList.add("currentPage");
        }

        dynamicPage.addEventListener("click", () => {
            currentPage = i;
            updatePagination();
        });
        pageNumbersRef.appendChild(dynamicPage);
    }
}

function nextPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePaginationData();
    }
}

function previousPage() {
    if (currentPage < pageCount) {
        currentPage++;
        updatePaginationData();
    }
}

function updatePaginationData() {
    getPageData();
    createPageNumbers();
}

// invoice wrapper to show total data counts etc
function createInvoiceWraper(jsonData) {
    const invoiceCount = document.getElementById('title');
    const status = statusComponent('default', `${jsonData.data.length} total`);
    invoiceCount.appendChild(status);
    const footerRef = document.getElementById('footer');
    const footerText = document.createElement('p');
    footerText.textContent = `Showing ${jsonData.data.length} of 1,000 results`;
    footerRef.appendChild(footerText);
}


// Table cell td on checkbox selection related functinalities here
function onChecked() {
    const allheckboxes = document.querySelectorAll('.invoicItemCheck');
    const allChecked = Array.from(allheckboxes).every(checkbox => checkbox.checked);
    const someChecked = Array.from(allheckboxes).some(checkbox => checkbox.checked);

    // set header checkbox indeterminate or checked
    const checkBoxInputid = document.getElementById("headrcheckbox");
    checkBoxInputid.checked = allChecked;
    checkBoxInputid.indeterminate = !allChecked && someChecked;

}

// Table header check box to make selection of all the items
function selectAllCheckbox (){
    const getHeaderCheckboxref = document.getElementById("headrcheckbox");
    const allCheckboxes = document.querySelectorAll('.invoicItemCheck');
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = getHeaderCheckboxref.checked;
        });
}


/* Entry where we call two functions after dom rendered successfully,
 first one is to update wrapper layer invoice section.
 second one updatePaginationData is to create table data as per pagination rules 7 items per page
*/
document.addEventListener('DOMContentLoaded', () => {
    createInvoiceWraper(jsonData);
    updatePaginationData();
});

