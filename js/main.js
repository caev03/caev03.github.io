var graphConfig = new GitGraph.Template({
    colors: ["#e0e0e0","#66f", "#660000", "#00BB00", "#9993FF", "#808080", "#999900", "#660033", "#34A5DA", "#006600"],
    branch: {
        // color: "#000000",
        lineWidth: 7,
        spacingX: 40,
        mergeStyle: "bezier",
        showLabel: true, // display branch names on graph
        labelFont: "normal 8pt Calibri",
        labelColor: "white",
        labelRotation: 0
    },
    commit: {
        spacingY: -30,
        dot: {
            size: 14
        },
        tag: {
            font: "normal 8pt Calibri",
            color: "#e0e0e0",
            labelRotation: -90

        },
        message: {
            color: "black",
            font: "normal 12pt Calibri",
            displayAuthor: false,
            displayBranch: false,
            displayHash: false,
        }
    }
});

var config = {
    template: graphConfig,//"metro",//
    mode: "extended",
    orientation: "vertical"
};

var masterCol = 5;
var academicalCol = masterCol + 1;
var personalInterest = masterCol - 1;

var gitgraph = new GitGraph(config);
var master = gitgraph.branch({
    name: "Career",
    column: masterCol
});


master.commit("Initial commit :)");
var academic = gitgraph.branch({
    parentBranch: master,
    name: "Academical Career",
    column: academicalCol
});
var interests = gitgraph.branch({
    parentBranch: master,
    name: "Academical Interest",
    column: personalInterest
});
interests.commit({ messageDisplay: false })
master.commit("Bachelors dregree - Colegio Agustiniano San Nicolas");
master.merge(academic, { message: "Accepted at Universidad de los Andes, Bogotá, Colombia" })
var mathUndergraduate = gitgraph.branch({
    parentBranch: academic,
    name: "Math Undergraduate",
    column: academicalCol + 2,
    color: "#DDDD00"
})
mathUndergraduate.commit({ message: "Mathematics Undergraduate Program", color: "#DDDD00" })
// academic.commit("Second undergraduated semester finished")
academic.commit({ messageDisplay: false, tag: "Second Semester" })
academic.merge(interests, { message: "Programming Marathons" })
// academic.commit("Third undergraduated semester finished")
academic.commit({ messageDisplay: false, tag: "Third Semester" })
var engUndergraduated = gitgraph.branch({
    parentBranch: academic,
    name: "System Engineering Undergraduate",
    column: academicalCol + 1,
    color: "#006666"
})
engUndergraduated.commit({ message: "System Engineering Undergraduate Program", color: "#006666" })
engUndergraduated.merge(interests, { message: "Algorithms" })
// academic.commit("Fourth Semester ended")
academic.commit({ messageDisplay: false, tag: "Fourth Semester" })
mathUndergraduate.merge(academic, { message: "Full Undergraduate career into Minor career" })
engUndergraduated.merge(interests, { message: "Computation Theory" })
academic.commit({ messageDisplay: false, tag: "Fifth Semester" })
engUndergraduated.commit({ message: "TA at Computational Theory course", color: "#006666" })
academic.commit({ messageDisplay: false, tag: "Eight Semester" })
engUndergraduated.merge(master, { message: "Internship at Mareigua Ltda." })
academic.commit({ messageDisplay: false, tag: "Nineth Semester" })
engUndergraduated.merge(interests, { message: "Mobile Development" })
var android = gitgraph.branch({
    parentBranch: interests,
    name: "Mobile Development Research",
    column: personalInterest - 1
})
academic.commit({ messageDisplay: false, tag: "Tenth Semester" })
android.commit({ message: "Android Research Collaboration with Linares-Vásquez, Mario" })
engUndergraduated.merge(interests, { message: "Web Development" })
android.commit({ message: "Security in Android OS" })
var web = gitgraph.branch({
    parentBranch: interests,
    name: "Web Development Research",
    column: personalInterest - 2
})
web.commit("Data Viz with D3")
engUndergraduated.merge(academic, { message: "Undergraduate Thesis Defense" })
academic.merge(master, { message: "Finish Undergraduate career" })
master.merge(academic, { message: "Accepted at Universidad de los Andes, Bogotá, Colombia" })
var miso = gitgraph.branch({
    parentBranch: academic,
    name: "Master in Software Engineering",
    column: academicalCol + 1
})
miso.commit({ message: "Master in Software Engineering" })
var tsdl = gitgraph.branch({
    parentBranch: miso,
    name: "The Software Design Lab",
    column: academicalCol + 2
})
var publications = gitgraph.branch({
    parentBranch: academic,
    name: "Publications",
    column: academicalCol + 3
})
academic.commit({ message: "Accepted at Research Group" })
academic.merge(tsdl, { messageDisplay: false })
tsdl.merge(publications, { message: "Android Security Research" })
var msr17 = gitgraph.branch({
    parentBranch: publications,
    name: "MSR2017",
    column: academicalCol + 4,
    color: "#006"
})
// msr17.commit({messageDisplay: false})
msr17.commit({ message: "Paper Title: An Empirical Study on Android-related Vulnerabilities", color: "#006" })
android.merge(msr17, { message: "Analysis of Android Security Bulletins", color: "#006" })
web.merge(msr17, { message: "D3 Visualization of Analysis results", color: "#006" })
msr17.merge(publications, { message: "Accepted Paper - Third Author" })
publications.merge(tsdl, { messageDisplay: false })
miso.commit({ messageDisplay: false, tag: "First Semester" })
miso.merge(interests, { message: "Model Generation" })
tsdl.merge(interests, { message: "Docker" })
tsdl.merge(interests, { message: "Gitlab" })
miso.commit({ messageDisplay: false, tag: "Second Semester" })
miso.merge(interests, { message: "Test Automation" })
interests.merge(android, { message: "Android Test Automation" })
android.commit("Continous, Evolutionary and Large-Scale Automated Android Testing")
tsdl.merge(android, { message: "Eventual Connectivity for Android Apps" })
tsdl.merge(publications, { message: "Eventual Connectivity for Android Apps" })
interests.merge(web, { message: "Web Development Testing" })
miso.commit({ messageDisplay: false, tag: "Third Semester" })
miso.commit({ message: "Masters Thesis Beginning" })
miso.merge(android, { message: "Mutation Testing" })
android.merge(tsdl, { message: "MDroid+ Maintenance" })
miso.merge(android, { message: "Model Generation for Android Apps" })
miso.merge(android, { message: "On-Demand Documentation" })
tsdl.commit('"El club de los Tesos" Android App')
tsdl.merge(interests, { message: "Hybrid Applications" })
interests.merge(web, { message: "Progressive Web Apps" })
interests.merge(android, { message: "Ionic Framework" })
interests.merge(android, { message: "Flutter Framework" })
android.merge(web, { message: "Dart Programming Language" })
interests.commit("Machine Learning")
var machineLearning = gitgraph.branch({
    parentBranch: interests,
    name: "Machine Learning Research",
    column: personalInterest - 3
})
machineLearning.commit({ messageDisplay: false })
miso.commit({ messageDisplay: false, tag: "Summer Course" })
miso.merge(interests, { message: "Functional Programming" })
interests.merge(android, { message: "Kotlin Programming Language" })

miso.commit({ messageDisplay: false, tag: "Fourth Semester" })
tsdl.commit("BlueHack Free Steps Against Human Trafficking")
var bluehack = gitgraph.branch({
    parentBranch: tsdl,
    name: "Bluehack",
    column: academicalCol + 4,
    color: "#006"
})
bluehack.commit({message:"Winners of Hackaton", color: "#006"})
bluehack.commit({message:"FIND - Contract with United Nations Office on Drugs and Crime", color: "#006"})
bluehack.merge(tsdl, {message: " "})

machineLearning.commit({ messageDisplay: false })
publications.commit({ messageDisplay: false })
web.commit({ messageDisplay: false })
tsdl.commit({ messageDisplay: false })
android.commit({ messageDisplay: false })
miso.commit({ messageDisplay: false })
interests.commit({ messageDisplay: false })
academic.commit({ messageDisplay: false })
master.commit({ messageDisplay: false })
machineLearning.commit({ messageDisplay: false })
publications.commit({ messageDisplay: false })
web.commit({ messageDisplay: false })
tsdl.commit({ messageDisplay: false })
android.commit({ messageDisplay: false })
miso.commit({ messageDisplay: false })
interests.commit({ messageDisplay: false })
academic.commit({ messageDisplay: false })
master.commit({ messageDisplay: false })