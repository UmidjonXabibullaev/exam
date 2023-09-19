 const overlay = document.getElementById('overlay')


 const loaderToggle = (toggle)=>{
  if (toggle) {
    overlay.classList.remove('hidden')

  }else{
    overlay.classList.add('hidden')
  }
 }



const getData = async (api) => {
  const req = await fetch(api);

  if (!req.ok) {
    throw new Error("Something went wrong:(");
  }

  const data = await req.json();
  return data;
};

export default getData;
