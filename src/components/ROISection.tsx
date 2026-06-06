import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Calculator, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const ROISection = () => {
    const [traffic, setTraffic] = useState([10000]);
    const [conversionRate, setConversionRate] = useState([2]);
    const [orderValue, setOrderValue] = useState([500]); // Changed default to 500 INR

    const currentRevenue = traffic[0] * (conversionRate[0] / 100) * orderValue[0];
    const projectedTraffic = traffic[0] * 1.5; // 50% increase
    const projectedConversion = conversionRate[0] * 1.3; // 30% increase
    const projectedRevenue = projectedTraffic * (projectedConversion / 100) * orderValue[0];

    const data = [
        {
            name: "Current",
            revenue: Math.round(currentRevenue),
        },
        {
            name: "With Brand Yatra",
            revenue: Math.round(projectedRevenue),
        },
    ];

    return (
        <section className="py-20 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-primary mb-6">
                            <Calculator className="w-4 h-4" />
                            <span>Growth Calculator</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-6">
                            Calculate Your <span className="text-gradient">Potential Growth</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            See how our data-driven strategies can impact your bottom line. Adjust the sliders to match your current metrics.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Controls */}
                    <FadeIn direction="right" delay={0.2}>
                        <div className="glass-effect p-8 rounded-3xl space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="font-semibold">Monthly Traffic</label>
                                    <span className="text-primary font-bold">{traffic[0].toLocaleString()}</span>
                                </div>
                                <Slider
                                    value={traffic}
                                    onValueChange={setTraffic}
                                    min={1000}
                                    max={100000}
                                    step={1000}
                                    className="py-4"
                                />
                                <p className="text-xs text-muted-foreground">Visitors per month</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="font-semibold">Conversion Rate</label>
                                    <span className="text-primary font-bold">{conversionRate[0]}%</span>
                                </div>
                                <Slider
                                    value={conversionRate}
                                    onValueChange={setConversionRate}
                                    min={0.1}
                                    max={10}
                                    step={0.1}
                                    className="py-4"
                                />
                                <p className="text-xs text-muted-foreground">Percentage of visitors who buy</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="font-semibold">Avg. Order Value</label>
                                    <span className="text-primary font-bold">₹{orderValue[0]}</span>
                                </div>
                                <Slider
                                    value={orderValue}
                                    onValueChange={setOrderValue}
                                    min={100}
                                    max={10000}
                                    step={100}
                                    className="py-4"
                                />
                                <p className="text-xs text-muted-foreground">Average value per transaction</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Results */}
                    <FadeIn direction="left" delay={0.4}>
                        <div className="bg-card/50 border border-border/50 p-8 rounded-3xl h-full flex flex-col justify-between">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">Projected Monthly Revenue</h3>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl sm:text-5xl font-bold text-gradient">
                                        ₹{Math.round(projectedRevenue).toLocaleString('en-IN')}
                                    </span>
                                    <span className="text-green-500 font-semibold flex items-center">
                                        +₹{(projectedRevenue - currentRevenue).toLocaleString('en-IN')}
                                        <span className="text-xs ml-1 text-muted-foreground">(Growth)</span>
                                    </span>
                                </div>
                            </div>

                            <div className="h-[300px] w-full mb-8">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: 'hsl(var(--muted-foreground))' }}
                                        />
                                        <YAxis
                                            hide
                                        />
                                        <Tooltip
                                            cursor={{ fill: 'transparent' }}
                                            contentStyle={{
                                                backgroundColor: 'hsl(var(--card))',
                                                border: '1px solid hsl(var(--border))',
                                                borderRadius: '8px'
                                            }}
                                        />
                                        <Bar dataKey="revenue" radius={[8, 8, 0, 0]}>
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 1 ? 'url(#colorGradient)' : 'hsl(var(--muted))'} />
                                            ))}
                                        </Bar>
                                        <defs>
                                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={1} />
                                                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                                            </linearGradient>
                                        </defs>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <Button className="w-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/50 h-12 text-lg">
                                Start Your Growth Journey <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ROISection;
