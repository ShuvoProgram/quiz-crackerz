export const fetchData = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/quiz');
    const loadData = data.json();
    return loadData;
}