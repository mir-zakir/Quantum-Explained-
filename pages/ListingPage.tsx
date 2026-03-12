
import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/ui/Card';
import { SkeletonGrid } from '../components/ui/Skeleton';

interface ListingPageProps {
  title: string;
  subtitle: string;
  items: any[];
  basePath: string;
  type: "store" | "ebooks" | "courses" | "resources";
}

const ListingPage: React.FC<ListingPageProps> = ({ title, subtitle, items, basePath, type }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [type]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <SectionHeader title={title} subtitle={subtitle} />
        
        {loading ? (
          <SkeletonGrid />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <Card 
                key={item.id}
                id={item.id}
                title={item.title || item.name}
                subtitle={item.category || item.summary || item.type || item.duration}
                imageUrl={item.imageUrl}
                price={item.price}
                basePath={basePath}
              />
            ))}
          </div>
        )}

        {!loading && items.length === 0 && (
          <div className="text-center py-24 glass rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-2">No Research Found</h3>
            <p className="text-slate-400">Our scientists are currently gathering data for this sector.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ListingPage;
