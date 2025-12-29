import React from 'react';
import { Settings, BookOpenIcon, TrophyIcon, UsersIcon, StarIcon, TargetIcon, BellIcon, CalendarIcon, ArrowRight } from './Iconcomponents';

// Data for the dashboard cards
const quickStats = { courses: 12, competitions: 5, streak: 7 };
const achievements = [
    { title: 'First Competition', icon: TrophyIcon },
    { title: 'Course Completer', icon: BookOpenIcon },
    { title: 'Community Helper', icon: UsersIcon },
    { title: 'Streak Master', icon: TargetIcon },
    { title: 'Mentor', icon: StarIcon },
    { title: 'Innovation Award', icon: TrophyIcon },
];
const savedOpportunities = [
    { title: 'Google Summer of Code 2024', type: 'Internship', date: 'Mar 15, 2024', status: 'Application Due' },
    { title: 'React Advanced Workshop', type: 'Course', date: 'Feb 28, 2024', status: 'Early Bird' },
];
const recentActivity = [
    { title: 'Completed Python Fundamentals Course', time: '2 days ago', icon: BookOpenIcon },
    { title: 'Joined AI Study Group', time: '3 days ago', icon: UsersIcon },
    { title: 'Submitted Design Challenge Entry', time: '1 week ago', icon: TrophyIcon },
];
const notifications = [
    { title: 'New course recommendation', content: 'Advanced Machine Learning matches your profile', time: '2 hours ago' },
    { title: 'Competition reminder', content: 'AI Hackathon submissions due in 3 days', time: '5 hours ago' },
    { title: 'Achievement unlocked!', content: "You've completed your first course", time: '1 day ago' },
];

export function DashboardPage() {
    const profileStrength = 85;

    return (
        <section className="py-12 px-4 animate-fadeIn">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12">
                <div>
                    <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-white">Welcome back, Alex!</h1>
                    <p className="text-lg text-white/70 mt-1">Ready to continue your learning journey? Here's what's happening.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="hologram px-4 py-2 rounded-lg flex items-center gap-2 text-white/90 hover:bg-white/10 transition-colors"><Settings size={18} /> Settings</button>
                    <button className="hologram px-4 py-2 rounded-lg flex items-center gap-2 text-white/90 hover:bg-white/10 transition-colors">Export Data</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Profile Card */}
                    <div className="hologram p-8 rounded-2xl border-neon-blue/50 flex flex-col md:flex-row items-center gap-8">
                        <img src="https://github.com/shadcn.png" alt="Alex Johnson" className="w-24 h-24 rounded-full border-4 border-neon-blue shadow-neon-blue" />
                        <div className="flex-grow w-full">
                            <h2 className="font-orbitron text-2xl font-bold text-white">Alex Johnson</h2>
                            <p className="text-neon-blue/80 mb-4">Computer Science Student</p>
                            <div className="w-full bg-black/50 rounded-full h-3 border border-white/20 p-0.5">
                                <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-full rounded-full" style={{ width: `${profileStrength}%` }}></div>
                            </div>
                            <div className="flex justify-between text-xs text-white/60 mt-1">
                                <span>Profile Strength</span>
                                <span>{profileStrength}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats & Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="hologram p-6 rounded-2xl border-neon-cyan/50">
                            <h3 className="font-orbitron text-xl font-bold text-white mb-4">Quick Stats</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                                    <span className="flex items-center gap-3 font-semibold"><BookOpenIcon className="text-neon-cyan" /> Courses</span>
                                    <span className="font-bold text-lg">{quickStats.courses}</span>
                                </div>
                                <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                                    <span className="flex items-center gap-3 font-semibold"><TrophyIcon className="text-neon-cyan" /> Competitions</span>
                                    <span className="font-bold text-lg">{quickStats.competitions}</span>
                                </div>
                                <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                                    <span className="flex items-center gap-3 font-semibold"><TargetIcon className="text-neon-cyan" /> {quickStats.streak} Day Streak</span>
                                    <span className="font-bold text-lg text-neon-green">Keep it up!</span>
                                </div>
                            </div>
                        </div>
                        <div className="hologram p-6 rounded-2xl border-neon-pink/50">
                             <h3 className="font-orbitron text-xl font-bold text-white mb-4">Achievements</h3>
                             <div className="grid grid-cols-3 gap-3">
                                {achievements.map(ach => (
                                    <div key={ach.title} className="text-center p-3 bg-black/30 rounded-lg flex flex-col items-center justify-center aspect-square" title={ach.title}>
                                        <ach.icon className="h-8 w-8 text-neon-pink mb-2" />
                                        <span className="text-xs text-white/70">{ach.title}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>

                    {/* Saved Opportunities */}
                    <div className="hologram p-6 rounded-2xl border-neon-purple/50">
                         <div className="flex justify-between items-center mb-4">
                             <h3 className="font-orbitron text-xl font-bold text-white">Saved Opportunities</h3>
                             <a href="#" className="text-sm text-neon-purple hover:underline flex items-center gap-1">View All <ArrowRight size={14} /></a>
                         </div>
                         <div className="space-y-4">
                            {savedOpportunities.map(opp => (
                                <div key={opp.title} className="bg-black/30 p-4 rounded-lg flex flex-col md:flex-row justify-between md:items-center gap-3">
                                    <div>
                                        <p className="font-bold text-white">{opp.title}</p>
                                        <div className="flex items-center gap-4 text-xs text-white/60 mt-1">
                                            <span className="px-2 py-0.5 bg-neon-purple/20 text-neon-purple rounded-full">{opp.type}</span>
                                            <span className="flex items-center gap-1.5"><CalendarIcon className="h-3.5 w-3.5" /> {opp.date}</span>
                                            <span>{opp.status}</span>
                                        </div>
                                    </div>
                                    <button className="bg-white/10 hover:bg-white/20 text-white/90 px-4 py-1.5 rounded-md text-sm font-semibold transition-colors flex-shrink-0">View</button>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Recent Activity */}
                    <div className="hologram p-6 rounded-2xl border-neon-green/50">
                         <h3 className="font-orbitron text-xl font-bold text-white mb-4">Recent Activity</h3>
                         <ul className="space-y-4">
                            {recentActivity.map(act => (
                                <li key={act.title} className="flex items-center gap-4">
                                    <div className="p-2 bg-black/40 rounded-full border border-white/10">
                                        <act.icon className="h-5 w-5 text-neon-green" />
                                    </div>
                                    <div>
                                        <p className="text-white/90 font-semibold text-sm">{act.title}</p>
                                        <p className="text-xs text-white/60">{act.time}</p>
                                    </div>
                                </li>
                            ))}
                         </ul>
                    </div>

                    {/* Notifications */}
                    <div className="hologram p-6 rounded-2xl border-neon-yellow/50">
                         <h3 className="font-orbitron text-xl font-bold text-white mb-4">Notifications</h3>
                         <ul className="space-y-4">
                            {notifications.map(note => (
                                <li key={note.title} className="bg-black/30 p-3 rounded-lg border border-white/10">
                                     <p className="font-semibold text-sm text-neon-yellow">{note.title}</p>
                                     <p className="text-xs text-white/80 mt-1">{note.content}</p>
                                     <p className="text-xs text-white/50 text-right mt-2">{note.time}</p>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
