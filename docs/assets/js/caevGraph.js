var graphConfig = new GitGraph.Template({
    colors: ["#34A5DA", "#66f", "#fd6a02", "#f19c79", "#00BB00", "#006", "#c2e812", "#9993FF","#999900", "#660033", "#34A5DA", "#006600", "#006", "#000", "#f00"],
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

var masterCol = 0;
var academicalCol = masterCol + 8;
var personalInterest = academicalCol - 1;

var gitgraph = new GitGraph(config);
var master = gitgraph.branch({
    name: "Camilo's Life",
    column: masterCol
});


master.commit("Initial commit :)");
var academic = gitgraph.branch({
    parentBranch: master,
    name: "Academical Career",
    column: academicalCol
});
academic.commit("Accepted at Universidad de los Andes, Bogotá, Colombia")
// master.commit("Bachelors dregree - Colegio Agustiniano San Nicolas");
// master.merge(academic, { message:  })
var mathUndergraduate = gitgraph.branch({
    parentBranch: academic,
    name: "Math Undergraduate",
    column: academicalCol + 2,
    color: "#DDDD00"
})
mathUndergraduate.commit({ message: "Mathematics Undergraduate Program", color: "#DDDD00" })
// academic.commit("Second undergraduated semester finished")
// academic.commit({ messageDisplay: false, tag: "Second Semester" })
// academic.merge(interests, { message: "Programming Marathons" })
// academic.commit("Third undergraduated semester finished")
// academic.commit({ messageDisplay: false, tag: "Third Semester" })
var engUndergraduated = gitgraph.branch({
    parentBranch: academic,
    name: "System Engineering Undergraduate",
    column: academicalCol + 1,
    color: "#006666"
})
engUndergraduated.commit({ message: "System Engineering Undergraduate Program", color: "#006666" })
// engUndergraduated.merge(interests, { message: "Algorithms" })
// academic.commit("Fourth Semester ended")
var interests = gitgraph.branch({
    parentBranch: master,
    name: "Academical Interest",
    column: academicalCol-1
});
interests.commit({ messageDisplay: false })
// academic.commit({ messageDisplay: false, tag: "Fourth Semester" })
mathUndergraduate.merge(academic, { message: "Full Undergraduate career into Minor career" })
// engUndergraduated.merge(interests, { message: "Computation Theory" })
academic.commit({ messageDisplay: false, tag: "Fifth Semester" })
engUndergraduated.commit({ message: "TA at Computational Theory course", color: "#006666" })
academic.commit({ messageDisplay: false, tag: "Eight Semester" })
engUndergraduated.merge(master, { message: "Internship at Mareigua Ltda." })
academic.commit({ messageDisplay: false, tag: "Nineth Semester" })
engUndergraduated.merge(interests, { message: "Mobile Development" })
var android = gitgraph.branch({
    parentBranch: interests,
    name: "Mobile Development Research",
    column: personalInterest - 3
})
academic.commit({ messageDisplay: false, tag: "Tenth Semester" })
android.commit({ message: "Android Research Collaboration with Linares-Vásquez, Mario" })
engUndergraduated.merge(interests, { message: "Web Development" })
android.commit({ message: "Security in Android OS" })
var web = gitgraph.branch({
    parentBranch: interests,
    name: "Web Development Research",
    column: personalInterest - 5
})
web.commit("Visual Analytics with D3")
engUndergraduated.merge(academic, { message: "Undergraduate Thesis Defense - Braviz Brain" })
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
tsdl.merge(android,{message:"Quality attributes for Android Apps"})
academic.commit({ message: "Research Life starts - The amazing part" })
academic.merge(tsdl, { message: "Accepted at The Software Design Lab as Researcher" })
var qaaa = gitgraph.branch({
    parentBranch: android,
    name: "Quality attributes for Android Apps",
    column: personalInterest - 4
})
var publications = gitgraph.branch({
    parentBranch: academic,
    name: "Publications",
    column: academicalCol + 3
})
publications.commit({messageDisplay: false})
qaaa.commit(" ")
qaaa.merge(tsdl, {message: "Security in Android Apps"})
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
// miso.commit({ messageDisplay: false, tag: "First Semester" })
miso.merge(interests, { message: "Model Generation" })
var seta = gitgraph.branch({
    parentBranch: interests,
    name: "Software Engineering Task Automation",
    column: personalInterest - 1
})
seta.commit("Automated Model Generation")
tsdl.merge(interests, { message: "Docker" })
tsdl.merge(interests, { message: "Gitlab CI Engine" })
qaaa.merge(tsdl,{message: "Eventual Connectivity for Android Apps"})
miso.merge(interests, {message: "Software Testing"})
var swt = gitgraph.branch({
    parentBranch: interests,
    name: "Software Testing",
    column: personalInterest - 2
})
swt.commit(" ")
swt.merge(android, { message: "Android Testing" })
swt.merge(web, { message: "Web Testing" })
miso.merge(interests, { message: "Test Automation" })
interests.merge(seta,{message:" "})
// interests.merge(swt,{message:" "})
swt.merge(seta, {message: " "})
seta.merge(android, { message: "Android Test Automation" })
seta.merge(tsdl, {message: "Large-Scale Android Automated Testing"})
seta.merge(web, {message: "Web Test Automation"})
// miso.commit({ messageDisplay: false, tag: "Second Semester" })
// android.commit("Continous, Evolutionary and Large-Scale Automated Android Testing")
miso.merge(interests, { message: "Mutation Testing" })
interests.merge(swt, {message:" "})
swt.merge(android, {message:"Mutation Testing for Android Apps"})
swt.merge(web, {message:"Mutation Testing for Web Apps"})
swt.merge(seta, {message:"Automation of Mutation Testing"})
seta.merge(miso,{message:"Master Thesis"})
var mts = gitgraph.branch({
    parentBranch: miso,
    name: "Master Thesis",
    column: academicalCol + 5
})
mts.commit("Automation of Software Engineering tasks for Android App at APK Level")
seta.merge(mts, {message: "Automated Model Generation of Android Apps at APK Level"})
seta.merge(mts, {message: "Automated Mutation Testing of Android Apps at APK Level"})
var mutapk = gitgraph.branch({
    parentBranch: mts,
    name: "MutAPK",
    column: academicalCol + 6
})
mutapk.commit("Java Tool to perform Mutation Testing for Android Apps at APK Level")
tsdl.merge(mts, { message: "MDroid+ Maintenance" })
// tsdl.commit({ message: "" })
// tsdl.merge(publications, { message: "Eventual Connectivity for Android Apps" })
// interests.merge(web, { message: "Web Development Testing" })
// miso.commit({ messageDisplay: false, tag: "Third Semester" })
// miso.commit({ message: "Masters Thesis Beginning" })
// interests.merge(android, {message: "Mutation Testing for Android Apps"})
// interests.merge(miso)
// miso.merge(android, { message: "Model Generation for Android Apps" })
// miso.merge(android, { message: "On-Demand Documentation" })
tsdl.commit('"El club de los Tesos" Android App')
// tsdl.merge(interests, { message: "Hybrid Applications" })
// interests.merge(web, { message: "Progressive Web Apps" })
// interests.merge(android, { message: "Ionic Framework" })
// interests.merge(android, { message: "Flutter Framework" })
// android.merge(web, { message: "Dart Programming Language" })
// interests.commit("Machine Learning")
// var machineLearning = gitgraph.branch({
//     parentBranch: interests,
//     name: "Machine Learning Research",
//     column: personalInterest - 6
// })
// machineLearning.commit({ messageDisplay: false })
// miso.commit({ messageDisplay: false, tag: "Summer Course" })
// miso.merge(interests, { message: "Functional Programming" })
// interests.merge(android, { message: "Kotlin Programming Language" })

// miso.commit({ messageDisplay: false, tag: "Fourth Semester" })
mts.merge(mutapk,{message: "MDroid+ structure translated for MutAPK"})
mutapk.commit("Text Mutation Operators implemented")
tsdl.commit("BlueHack Free Steps Against Human Trafficking")
var bluehack = gitgraph.branch({
    parentBranch: tsdl,
    name: "Bluehack",
    column: academicalCol + 4,
    color: "#006"
})
bluehack.commit({message:"Winners of Hackaton", color: "#006"})
bluehack.commit({message:"FIND - Contract with United Nations Office on Drugs and Crime", color: "#006"})
bluehack.commit({message:"TechCamp Peru - Colaboración regional contra el crimen", color:"#006"})
bluehack.merge(interests, {message: "Blockchain"})
bluehack.merge(tsdl, {message: " "})
mutapk.commit("Abstract Sintax Tree generation for Android App at APK Level")
mutapk.commit("AST Mutation Operators rules translated from Java to SMALI")
// mutapk.commit("First 10 AST mutation operators implemented")
tsdl.commit("ICSME 2018")
var icsme = gitgraph.branch({
    parentBranch: tsdl,
    name: "ISCME 2018",
    column: academicalCol + 4,
    color: "#006"
})
icsme.commit({message:"Student Volunteer", color: "#006"})
icsme.merge(tsdl, {message: " "})

academic.commit("Google Latin America Research Award")
var glara = gitgraph.branch({
    parentBranch: academic,
    name: "Google Latin America Research Award 2018",
    column: academicalCol + 4,
    color: "#4285F4"
})
glara.commit({message:"Enabling Automated Software Engineering Tasks for Closed-Source Mobile Apps", color: "#4285F4"})
mts.merge(glara, {message:"Automated Model Generation for Android Apps at APK level", color: "#DB4437"})
mutapk.merge(glara,{message:"Automated Mutation Testing for Android Apps at APK level", color: "#F4B400"})
seta.merge(glara,{message:"On-demand Documentation for Android Apps at APK level", color: "#4285F4"})
seta.merge(glara,{message:"Automated Test generation for Android Apps at APK level", color: "#0F9D58"})
// glara.commit({message:""})
glara.commit({message:"Google Latin America Research Award Main Event - Brazil", color: "#DB4437"})
glara.merge(academic, {message: " "})
mutapk.commit("Remaining AST mutation operators implemented")
mutapk.merge(mts,{message:"Thesis tests"})
mts.commit("Thesis document")
mts.merge(miso, {message:"Master Thesis Defense"})
miso.merge(master, {message: "Finish Master in Software Engineering"})
master.merge(academic, { message: "Accepted at Universidad de los Andes, Bogotá, Colombia" })
var phd = gitgraph.branch({
    parentBranch: academic,
    name: "Ph.D. in Engineering - Software Engineering",
    column: academicalCol + 1
})
phd.commit({ message: "Ph.D. in Engineering - Software Engineering" })
interests.commit("Machine Learning")
var machineLearning = gitgraph.branch({
    parentBranch: interests,
    name: "Machine Learning Research",
    column: personalInterest - 6
})
machineLearning.commit({ messageDisplay: false })
qaaa.merge(tsdl, {message: "Internationalization of Android Apps"})
web.merge(tsdl, {message: "Mutation Testing for NodeJS apps"})

// miso.merge({})

master.commit({ messageDisplay: false })
publications.commit({ messageDisplay: false })
machineLearning.commit({ messageDisplay: false })
tsdl.commit({ messageDisplay: false })
web.commit({ messageDisplay: false })
phd.commit({ messageDisplay: false })
qaaa.commit({ messageDisplay: false })
academic.commit({ messageDisplay: false })
android.commit({ messageDisplay: false })
interests.commit({ messageDisplay: false })
swt.commit({ messageDisplay: false })
seta.commit({ messageDisplay: false })
master.commit({ messageDisplay: false })
publications.commit({ messageDisplay: false })
machineLearning.commit({ messageDisplay: false })
tsdl.commit({ messageDisplay: false })
web.commit({ messageDisplay: false })
phd.commit({ messageDisplay: false })
qaaa.commit({ messageDisplay: false })
academic.commit({ messageDisplay: false })
android.commit({ messageDisplay: false })
interests.commit({ messageDisplay: false })
swt.commit({ messageDisplay: false })
seta.commit({ messageDisplay: false })