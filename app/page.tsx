import About from './components/About'

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

// Turns ?category=webdev,db or repeated ?category=webdev&category=db into a list
function toList(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return (Array.isArray(value) ? value : [value])
    .flatMap((v) => v.split(','))
    .map((v) => v.trim())
    .filter(Boolean);
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  return (
    <About
      initialCategories={toList(params.category)}
      initialSkills={toList(params.skills)}
    />
  );
}
