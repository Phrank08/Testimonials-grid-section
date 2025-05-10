import './App.css'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl w-full">
    
   {/* Daniel Clifford Card */}
    <div className="bg-[hsl(263,55%,52%)] text-white rounded-2xl p-6 md:col-span-2">
      <header className="flex items-center space-x-4 mb-4">
        <img src="/image-daniel.jpg" alt="Daniel Clifford" className="w-10 h-10 rounded-full border-2 border-white"/>
        <div>
          <p className="font-semibold">Daniel Clifford</p>
          <p className="text-sm opacity-70">Verified Graduate</p>
        </div>
      </header>
      <h3 className="font-bold text-lg mb-4">
        I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.
      </h3>
      <p className="text-sm opacity-90">
        “ I was on EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it increcibly fun! I enrolled shortly thereafter. The next 12 weeks was the best-and most grueling-time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. ”
      </p>
    </div>

    {/* Jonathan Walters Card */}
    <div className="bg-[hsl(217,19%,35%)] text-white rounded-2xl p-6">
      <header className="flex items-center space-x-4 mb-4">
        <img src="/image-jonathan.jpg" alt="Jonathan Walters" className="w-10 h-10 rounded-full"/>
        <div>
          <p className="font-semibold">Jonathan Walters</p>
          <p className="text-sm opacity-70">Verified Graduate</p>
        </div>
      </header>
      <h3 className="font-bold text-lg mb-4">
        The team was very supportive and kept me motivated
      </h3>
      <p className="text-sm opacity-90">
        “ I started as a total virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. ”
      </p>
    </div>

    {/* Kira Whittle - Tall Card */}
    <div className="bg-[hsl(0,0%,100%)] text-gray-800 rounded-2xl p-6 md:row-span-2 shadow-md">
      <header className="flex items-center space-x-4 mb-4">
        <img src="/image-kira.jpg" alt="Kira Whittle" className="w-10 h-10 rounded-full"/>
        <div>
          <p className="font-semibold">Kira Whittle</p>
          <p className="text-sm opacity-70">Verified Graduate</p>
        </div>
      </header>
      <h3 className="font-bold text-lg mb-4">
        Such a life-changing experience. Highly recommended!
      </h3>
      <p className="text-sm">
        “ Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and never had to wait long for assistance. The agile team project, in particuler, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers, 100% recommend! ”
      </p>
    </div>

    {/* Jeanette Harmon Card */}
    <div className="bg-[hsl(0,0%,100%)] text-gray-800 rounded-2xl p-6 shadow-md">
      <header className="flex items-center space-x-4 mb-4">
        <img src="/image-jeanette.jpg" alt="Jeanette Harmon" className="w-10 h-10 rounded-full"/>
        <div>
          <p className="font-semibold">Jeanette Harmon</p>
          <p className="text-sm opacity-70">Verified Graduate</p>
        </div>
      </header>
      <h3 className="font-bold text-lg mb-4">
        An overall wonderful and rewarding experience
      </h3>
      <p className="text-sm">
        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make good living while doing something I love. ”
      </p>
    </div>

    {/* Patrick Abrams Card */}
    <div className="bg-[hsl(219,29%,14%)] text-white rounded-2xl p-6 md:col-span-2">
      <header className="flex items-center space-x-4 mb-4">
        <img src="/image-patrick.jpg" alt="Patrick Abrams" className="w-10 h-10 rounded-full border-2 border-white"/>
        <div>
          <p className="font-semibold">Patrick Abrams</p>
          <p className="text-sm opacity-70">Verified Graduate</p>
        </div>
      </header>
      <h3 className="font-bold text-lg mb-4">
        Awesome teaching support from TAs who did the bootcamp themselves.
      </h3>
      <p className="text-sm opacity-90">
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
      </p>
    </div>
    
  </div>
</div>

  )
}

export default App
