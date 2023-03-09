import tools from "./tolls.js";

function renderTools() {
    
    tools.forEach(tools => {
        const contents = document.querySelector('.main__contents');
        contents.innerHTML += `

        <div class="tool">
        <div class="tool__heading">
            <span class="tool__heading--title">${tools.title}</span>
            <span class="tool__heading--description">${tools.description}</span>
        </div>
        <div class="tool__buttons">
            <a href="${tools.website}" class="btn btnLink" target="_blank"><i class="fa-solid fa-link icon"></i>Link</a>
        </div>
        <div class="tool__tags">
            <strong class="tool__tags--strong">Tags: </strong>
            <span class="tool__tags--text"> ${tools.tags}</span>
        </div>
    </div>

        `;
        console.log(tools.title)
    }
)}
renderTools();