


export async function load({cookies}){


    let theme = cookies.get("colortheme");

    if(theme===undefined){
        theme = "light";
    }
    

    return {
        theme
    }
}