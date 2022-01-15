const reviews = [
    {
        image: '',
        name: 'Susan Smith',
        occupation: 'WEB DEVELOPER',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Oditeligendi hic, facere corporis reiciendis vel! Reiciendis velit velautem sapiente laudantium architecto quaerat odio facilis doloremque sint porro excepturi sunt voluptatibus rerum, sequiamet repellendus temporibus animi, culpa iure esse veniam? Aperiam quos, at est atque iusto maxime repudiandae fugit!",
    },
    {
        image: '',
        name: 'Adam Jason',
        occupation: 'ACCOUNTANT',
        description: 'There are great list of server-side programming languages and frameworks to choose from in building the business/server logic of any application.',
    },
    {
        image: '',
        name: 'LUKE MORGAN',
        occupation: 'NURSE',
        description: 'The list below shows a recommended list of common topics a Backend developer should master in any programming language of choice.',
    },
    {
        image: '',
        name: 'WENDY POLAND',
        occupation: 'CONSULTANT',
        description: 'Understands the goals of the software and comes up with effective solutions. Understands the goals of the software and comes up with effective solutions.',
    }
];
const nameElement = document.getElementById('name');
const occupationElement = document.getElementById('occupation');
const descriptionElement = document.getElementById('description');

let index = 0;
function updateUser() {
    let review = reviews[index]
    if (!review) {
       index = 0;
       review = reviews[index]
    }
    nameElement.innerHTML = review.name
    occupationElement.innerHTML = review.occupation
    descriptionElement.innerHTML = review.description
}

updateUser(index);

function previous() {
    index--
    updateUser();
}

function next() {
    index++
    updateUser();
}
