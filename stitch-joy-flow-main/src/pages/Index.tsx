import Header from "@/components/Header";
import SkillsGrid from "@/components/SkillsGrid";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4">
        <SkillsGrid />
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
