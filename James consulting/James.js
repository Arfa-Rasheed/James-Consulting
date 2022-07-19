var page;
function PageRedirect(page)
{
    window.location.replace(page);
}
function Show_Contact()
{
    window.scrollBy(0,1800);                
}
function Show_About()
{
    PageRedirect("About.html");
     
}
function Show_Services()
{
    PageRedirect("Services.html");
     
}
function Show_Projects()
{
    PageRedirect("Projects.html");
     
}
function Show_Clients()
{
    PageRedirect("Clients.html");
     
}


function Show_Menu()
{
    document.getElementById('Nav').style.display="block";
}
function Close_Menu()
{
    document.getElementById('Nav').style.display="none";
}




