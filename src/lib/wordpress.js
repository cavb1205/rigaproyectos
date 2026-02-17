const API_URL = 'https://riga-api.vnfcdx.easypanel.host/wp-json/wp/v2';

export async function getPageData(slug) {
  const res = await fetch(`${API_URL}/pages?slug=${slug}&_embed`);
  const data = await res.json();
  return data[0]; // Devuelve solo la primera página encontrada
}

export async function getProjects() {
  // Traemos 100 proyectos por defecto. Si son más, luego implementamos paginación.
  const res = await fetch(`${API_URL}/proyectos?_embed&per_page=100`);
  const data = await res.json();
  return data;
}

export async function getServices() {
  const res = await fetch(`${API_URL}/servicios?_embed`);
  const data = await res.json();
  return data;
}
