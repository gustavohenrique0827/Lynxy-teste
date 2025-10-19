import { Card } from "@/components/ui/card";
import { LucideIcon, HelpCircle } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconBg?: string;
  iconColor?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  iconBg = "bg-primary/10", 
  iconColor = "text-primary" 
}: StatsCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow border-border/50">
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${iconBg} flex-shrink-0`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-1">
            <p className="text-xs text-muted-foreground truncate">{title}</p>
            <HelpCircle className="h-3 w-3 text-muted-foreground/50 flex-shrink-0" />
          </div>
          <p className="text-xl font-bold truncate">{value}</p>
        </div>
      </div>
    </Card>
  );
};
