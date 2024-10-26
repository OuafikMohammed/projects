import React from 'react';
class NavBar extends React.Component{
    render(){
        return(
<>
    <nav class="bg-blue-500 p-4">
        <ul class="flex space-x-4">
            <li class="text-white hover:text-blue-200 cursor-pointer">Home</li>
            <li class="text-white hover:text-blue-200 cursor-pointer">About</li>
            <li class="text-white hover:text-blue-200 cursor-pointer">Contact</li>
            <li class="text-white hover:text-blue-200 cursor-pointer">Work with us!</li>
            <li class="text-white hover:text-blue-200 cursor-pointer">Events And More</li>
        </ul>
    </nav>
</>
        )
    }
}
export default NavBar