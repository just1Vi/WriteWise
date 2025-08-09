// Article data
const articles = [
    {
        id: 'character-development',
        title: 'Creating Memorable Characters: A Complete Guide',
        excerpt: 'Learn how to develop compelling characters that readers will love and remember. From backstory to dialogue, discover the secrets of character creation.',
        content: `
            <h2>Creating Memorable Characters: A Complete Guide</h2>
            
            <p>Characters are the heart of any story. They drive the plot, create emotional connections with readers, and make your narrative unforgettable. Here's how to create characters that leap off the page.</p>
            
            <h3>Start with the Basics</h3>
            <p>Every character needs a foundation. Begin by answering these essential questions:</p>
            <ul>
                <li>What does your character want more than anything?</li>
                <li>What's their biggest fear or flaw?</li>
                <li>What makes them unique from other characters?</li>
                <li>How do they speak and behave differently?</li>
            </ul>
            
            <h3>Develop a Rich Backstory</h3>
            <p>Even if you don't include every detail in your story, knowing your character's history will inform their actions and decisions. Consider:</p>
            <ul>
                <li>Family background and relationships</li>
                <li>Key life events that shaped them</li>
                <li>Education and career history</li>
                <li>Personal triumphs and failures</li>
            </ul>
            
            <h3>Create Internal and External Conflicts</h3>
            <p>Characters become interesting when they face challenges. Internal conflicts (emotional struggles) and external conflicts (plot obstacles) should work together to create tension and drive character growth.</p>
            
            <h3>Write Distinctive Dialogue</h3>
            <p>Each character should have their own way of speaking. Consider their background, education, personality, and current emotional state when crafting their dialogue.</p>
            
            <h3>Show Character Through Action</h3>
            <p>Actions speak louder than words. Show your character's personality through their choices, reactions, and behaviors rather than telling the reader about them.</p>
            
            <h3>Allow for Growth and Change</h3>
            <p>Characters should evolve throughout your story. The challenges they face should change them in meaningful ways, creating a satisfying character arc.</p>
            
            <p>Remember: The most memorable characters are those who feel real, flawed, and human. Don't be afraid to give them weaknesses and make them struggle—that's what makes them relatable and compelling.</p>
        `,
        tags: ['character-development', 'writing-craft', 'storytelling'],
        image: 'images/Creating_Memorable_Characters_A_Complete_Guide_cover_16x9.jpg'
    },
    {
        id: 'writers-block',
        title: '10 Proven Strategies to Overcome Writer\'s Block',
        excerpt: 'Stuck staring at a blank page? These practical techniques will help you break through creative barriers and get your words flowing again.',
        content: `
            <h2>10 Proven Strategies to Overcome Writer's Block</h2>
            
            <p>Every writer faces the dreaded blank page at some point. Writer's block can feel overwhelming, but it's a common challenge that can be overcome with the right strategies.</p>
            
            <h3>1. Free Writing</h3>
            <p>Set a timer for 10-15 minutes and write without stopping. Don't worry about grammar, spelling, or making sense. The goal is to get your creative juices flowing and break through the mental barrier.</p>
            
            <h3>2. Change Your Environment</h3>
            <p>Sometimes a change of scenery is all you need. Try writing in a different room, at a coffee shop, or outdoors. A new environment can provide fresh inspiration and perspective.</p>
            
            <h3>3. Read Something Inspiring</h3>
            <p>Immerse yourself in the work of authors you admire. Reading can spark new ideas and remind you why you love writing in the first place.</p>
            
            <h3>4. Use Writing Prompts</h3>
            <p>Writing prompts can jumpstart your creativity when you're feeling stuck. They provide a starting point that can lead to unexpected and exciting directions.</p>
            
            <h3>5. Break Down Your Project</h3>
            <p>Instead of focusing on the entire story, break it into smaller, manageable pieces. Work on one scene, one chapter, or even one paragraph at a time.</p>
            
            <h3>6. Switch Up Your Routine</h3>
            <p>If you usually write in the morning, try writing at night. If you write on a computer, try writing by hand. Small changes can help you see your work with fresh eyes.</p>
            
            <h3>7. Talk It Out</h3>
            <p>Sometimes talking about your story with a friend or fellow writer can help you work through plot problems and generate new ideas.</p>
            
            <h3>8. Take a Creative Break</h3>
            <p>Engage in other creative activities like drawing, cooking, or playing music. These activities can stimulate your creativity in unexpected ways.</p>
            
            <h3>9. Set Realistic Goals</h3>
            <p>Instead of aiming to write a perfect chapter, set smaller goals like writing 500 words or working for 30 minutes. Celebrate these small victories.</p>
            
            <h3>10. Remember Why You Started</h3>
            <p>Reconnect with your passion for writing. Think about the stories you want to tell and the readers you want to reach. Your motivation is your greatest weapon against writer's block.</p>
            
            <p>Remember: Writer's block is temporary. Be patient with yourself and trust that the words will come. Every writer has faced this challenge and emerged stronger on the other side.</p>
        `,
        tags: ['writers-block', 'motivation', 'writing-tips'],
        image: 'images/10_Proven_Strategies_to_Overcome_Writers_Block_cover_16x9.jpg'
    },
    {
        id: 'plot-structure',
        title: 'Mastering Plot Structure: From Idea to Resolution',
        excerpt: 'Discover how to structure your story for maximum impact. Learn the essential elements of plot and how to weave them together into a compelling narrative.',
        content: `
            <h2>Mastering Plot Structure: From Idea to Resolution</h2>
            
            <p>A well-structured plot is the backbone of any successful story. It guides readers through your narrative, creates tension, and delivers satisfying payoffs. Here's how to master the art of plot structure.</p>
            
            <h3>The Three-Act Structure</h3>
            <p>Most stories follow a three-act structure that provides natural pacing and tension:</p>
            
            <h4>Act I: Setup (25% of your story)</h4>
            <ul>
                <li>Introduce your main character and their world</li>
                <li>Establish the status quo</li>
                <li>Present the inciting incident that changes everything</li>
                <li>Set up the central conflict</li>
            </ul>
            
            <h4>Act II: Confrontation (50% of your story)</h4>
            <ul>
                <li>Develop the conflict and raise the stakes</li>
                <li>Introduce complications and obstacles</li>
                <li>Build toward the climax</li>
                <li>Include a midpoint that changes the direction</li>
            </ul>
            
            <h4>Act III: Resolution (25% of your story)</h4>
            <ul>
                <li>Build to the climactic moment</li>
                <li>Resolve the central conflict</li>
                <li>Show the aftermath and new status quo</li>
                <li>Provide closure for your characters</li>
            </ul>
            
            <h3>Essential Plot Elements</h3>
            
            <h4>Inciting Incident</h4>
            <p>This is the event that sets your story in motion. It disrupts your character's normal life and forces them to take action.</p>
            
            <h4>Rising Action</h4>
            <p>As your story progresses, the stakes should increase. Each obstacle should be more challenging than the last, building tension toward the climax.</p>
            
            <h4>Climax</h4>
            <p>This is the moment of highest tension, where your character faces their biggest challenge. It's the make-or-break moment of your story.</p>
            
            <h4>Falling Action</h4>
            <p>After the climax, show the immediate consequences and begin wrapping up loose ends.</p>
            
            <h4>Resolution</h4>
            <p>Show how your character and their world have changed. Provide closure while leaving room for readers to imagine what comes next.</p>
            
            <h3>Plotting Techniques</h3>
            
            <h4>Outlining</h4>
            <p>Create a detailed outline before you start writing. This helps you see the big picture and identify potential problems early.</p>
            
            <h4>Scene Cards</h4>
            <p>Write each scene on an index card with the goal, conflict, and outcome. This helps you ensure each scene moves the plot forward.</p>
            
            <h4>Story Beats</h4>
            <p>Identify the key moments that must happen in your story. These are the non-negotiable scenes that drive your plot forward.</p>
            
            <h3>Common Plot Problems and Solutions</h3>
            
            <h4>Slow Pacing</h4>
            <p>If your story feels slow, look for scenes that don't advance the plot or develop character. Cut or combine scenes that don't serve your story's goals.</p>
            
            <h4>Predictable Plot</h4>
            <p>Add unexpected twists and complications. Consider what your readers expect to happen, then surprise them with something different.</p>
            
            <h4>Weak Climax</h4>
            <p>Ensure your climax is the most challenging moment your character faces. The stakes should be personal and meaningful to your protagonist.</p>
            
            <p>Remember: Plot structure is a tool, not a rule. Use it to guide your storytelling, but don't let it stifle your creativity. The best stories often break the rules in service of the story.</p>
        `,
        tags: ['plot-structure', 'storytelling', 'writing-craft'],
        image: 'images/Mastering_Plot_Structure_From_Idea_to_Resolution_cover_16x9.jpg'
    },
    {
        id: 'dialogue-writing',
        title: 'Writing Authentic Dialogue That Brings Characters to Life',
        excerpt: 'Master the art of dialogue writing to create conversations that feel real, reveal character, and advance your plot naturally.',
        content: `
            <h2>Writing Authentic Dialogue That Brings Characters to Life</h2>
            
            <p>Dialogue is one of the most powerful tools in a writer's arsenal. It can reveal character, advance plot, create tension, and bring your story to life. Here's how to write dialogue that sounds natural and serves your story.</p>
            
            <h3>Make Dialogue Sound Natural</h3>
            <p>Good dialogue should sound like real people talking, not like characters delivering speeches. Here are some tips:</p>
            <ul>
                <li>Use contractions (don't, can't, won't)</li>
                <li>Include interruptions and incomplete sentences</li>
                <li>Vary sentence length and rhythm</li>
                <li>Use filler words occasionally (um, uh, well)</li>
                <li>Show characters thinking while they speak</li>
            </ul>
            
            <h3>Give Each Character a Distinct Voice</h3>
            <p>Every character should sound different. Consider their:</p>
            <ul>
                <li>Background and education level</li>
                <li>Age and generation</li>
                <li>Personality traits</li>
                <li>Current emotional state</li>
                <li>Regional or cultural speech patterns</li>
            </ul>
            
            <h3>Use Dialogue to Reveal Character</h3>
            <p>What characters say (and don't say) reveals who they are:</p>
            <ul>
                <li>Show their values and beliefs through their words</li>
                <li>Reveal their relationships with other characters</li>
                <li>Demonstrate their emotional state</li>
                <li>Show their level of self-awareness</li>
            </ul>
            
            <h3>Advance the Plot Through Dialogue</h3>
            <p>Every conversation should move your story forward:</p>
            <ul>
                <li>Reveal important information</li>
                <li>Create or resolve conflicts</li>
                <li>Show character development</li>
                <li>Build tension or suspense</li>
            </ul>
            
            <h3>Balance Dialogue with Action</h3>
            <p>Don't let your characters just talk—show what they're doing while they speak:</p>
            <ul>
                <li>Include physical actions and gestures</li>
                <li>Show characters' reactions to what's being said</li>
                <li>Use body language to convey emotion</li>
                <li>Include environmental details</li>
            </ul>
            
            <h3>Master the Mechanics</h3>
            <p>Proper dialogue formatting is essential:</p>
            <ul>
                <li>Use quotation marks correctly</li>
                <li>Place dialogue tags naturally</li>
                <li>Start new paragraphs for new speakers</li>
                <li>Use action beats to break up long conversations</li>
            </ul>
            
            <h3>Common Dialogue Mistakes to Avoid</h3>
            <ul>
                <li><strong>Exposition dumps:</strong> Don't have characters explain things they already know</li>
                <li><strong>On-the-nose dialogue:</strong> Avoid characters saying exactly what they mean</li>
                <li><strong>Unrealistic speech:</strong> Don't make characters sound like they're reading from a script</li>
                <li><strong>Too much dialogue:</strong> Balance conversation with narrative and action</li>
            </ul>
            
            <h3>Dialogue Exercises</h3>
            <p>Practice these exercises to improve your dialogue skills:</p>
            <ul>
                <li>Write a conversation between two characters who want different things</li>
                <li>Create dialogue that reveals a character's secret without them saying it directly</li>
                <li>Write a scene where characters are lying to each other</li>
                <li>Practice writing dialogue for characters very different from yourself</li>
            </ul>
            
            <p>Remember: The best dialogue feels effortless to read but requires careful crafting to write. Listen to how people really talk, and use that as your guide while serving your story's needs.</p>
        `,
        tags: ['dialogue', 'character-development', 'writing-craft'],
        image: 'images/Writing_Authentic_Dialogue_That_Brings_Characters_to_Life_cover_16x9.jpg'
    },
    {
        id: 'world-building',
        title: 'World-Building: Creating Immersive Settings for Your Stories',
        excerpt: 'Learn how to build rich, believable worlds that enhance your story and captivate your readers, whether you\'re writing fantasy or contemporary fiction.',
        content: `
            <h2>World-Building: Creating Immersive Settings for Your Stories</h2>
            
            <p>Whether you're writing fantasy, science fiction, historical fiction, or contemporary stories, world-building is essential for creating immersive, believable settings that enhance your narrative.</p>
            
            <h3>Start with the Basics</h3>
            <p>Every world needs fundamental elements that affect how your story unfolds:</p>
            <ul>
                <li><strong>Geography:</strong> Physical landscape, climate, and natural resources</li>
                <li><strong>Society:</strong> Social structure, government, and cultural norms</li>
                <li><strong>Technology:</strong> Available tools, transportation, and communication</li>
                <li><strong>History:</strong> Past events that shaped the present</li>
                <li><strong>Economy:</strong> How people make a living and trade goods</li>
            </ul>
            
            <h3>Show, Don't Tell</h3>
            <p>Instead of explaining your world through exposition, reveal it through:</p>
            <ul>
                <li>Character actions and reactions to their environment</li>
                <li>Dialogue that reflects cultural attitudes</li>
                <li>Objects and technology that characters use</li>
                <li>Social interactions that demonstrate customs</li>
                <li>Environmental details that affect the plot</li>
            </ul>
            
            <h3>Create Consistent Rules</h3>
            <p>Your world should operate by consistent internal logic:</p>
            <ul>
                <li>Establish rules for magic, technology, or social systems</li>
                <li>Consider the consequences of these rules</li>
                <li>Maintain consistency throughout your story</li>
                <li>Use limitations to create conflict and tension</li>
            </ul>
            
            <h3>Build from the Inside Out</h3>
            <p>Start with what directly affects your characters and story:</p>
            <ul>
                <li>Focus on elements that impact your plot</li>
                <li>Develop details that create conflict or opportunity</li>
                <li>Consider how the world affects your characters' goals</li>
                <li>Use world-building to create obstacles and solutions</li>
            </ul>
            
            <h3>Cultural World-Building</h3>
            <p>Create believable cultures by considering:</p>
            <ul>
                <li>Values and beliefs that shape behavior</li>
                <li>Customs, rituals, and traditions</li>
                <li>Social hierarchies and power structures</li>
                <li>Art, music, and creative expression</li>
                <li>Food, clothing, and daily life</li>
            </ul>
            
            <h3>Historical World-Building</h3>
            <p>Even contemporary stories benefit from historical context:</p>
            <ul>
                <li>Research the time period thoroughly</li>
                <li>Understand how past events shaped the present</li>
                <li>Consider how characters' backgrounds affect their perspectives</li>
                <li>Use historical details to add authenticity</li>
            </ul>
            
            <h3>Fantasy and Science Fiction World-Building</h3>
            <p>For speculative fiction, consider:</p>
            <ul>
                <li>How magic or technology affects society</li>
                <li>The consequences of supernatural or advanced elements</li>
                <li>How different groups interact with these elements</li>
                <li>The limitations and costs of special abilities</li>
            </ul>
            
            <h3>Common World-Building Mistakes</h3>
            <ul>
                <li><strong>Info-dumping:</strong> Don't explain everything at once</li>
                <li><strong>Inconsistency:</strong> Maintain internal logic</li>
                <li><strong>Over-complication:</strong> Focus on what serves your story</li>
                <li><strong>Cultural appropriation:</strong> Research and respect other cultures</li>
                <li><strong>Unrealistic societies:</strong> Consider how systems actually work</li>
            </ul>
            
            <h3>World-Building Exercises</h3>
            <p>Practice these exercises to develop your world-building skills:</p>
            <ul>
                <li>Create a day in the life of a minor character in your world</li>
                <li>Write a scene that reveals world details through conflict</li>
                <li>Design a cultural ritual or celebration</li>
                <li>Map out how your world's systems affect your main character</li>
            </ul>
            
            <p>Remember: The best world-building serves your story and characters. Every detail should enhance your narrative, create conflict, or reveal character. Start small and build outward as your story requires.</p>
        `,
        tags: ['world-building', 'fantasy', 'writing-craft'],
        image: 'images/World_Building_Creating_Immersive_Settings_for_Your_Stories_cover_16x9.jpg'
    },
    {
        id: 'editing-revision',
        title: 'The Art of Editing: Transforming Your First Draft into a Polished Manuscript',
        excerpt: 'Learn systematic approaches to editing and revising your work, from big-picture structural changes to fine-tuning language and style.',
        content: `
            <h2>The Art of Editing: Transforming Your First Draft into a Polished Manuscript</h2>
            
            <p>Writing is rewriting. The first draft is just the beginning—the real magic happens during editing and revision. Here's how to transform your rough draft into a polished manuscript.</p>
            
            <h3>Take a Break</h3>
            <p>Before you start editing, put your manuscript away for at least a week (longer is better). This distance helps you see your work with fresh eyes and identify problems you might miss when you're too close to the material.</p>
            
            <h3>Edit in Layers</h3>
            <p>Don't try to fix everything at once. Edit in passes, focusing on different aspects each time:</p>
            
            <h4>First Pass: Big Picture</h4>
            <ul>
                <li>Story structure and pacing</li>
                <li>Character arcs and development</li>
                <li>Plot holes and logical inconsistencies</li>
                <li>Theme and message</li>
                <li>Beginning, middle, and ending</li>
            </ul>
            
            <h4>Second Pass: Scene Level</h4>
            <ul>
                <li>Scene purpose and effectiveness</li>
                <li>Scene transitions</li>
                <li>Dialogue quality and authenticity</li>
                <li>Show vs. tell balance</li>
                <li>Pacing within scenes</li>
            </ul>
            
            <h4>Third Pass: Line Level</h4>
            <ul>
                <li>Sentence structure and flow</li>
                <li>Word choice and precision</li>
                <li>Grammar and punctuation</li>
                <li>Repetitive words and phrases</li>
                <li>Clarity and conciseness</li>
            </ul>
            
            <h3>Structural Editing</h3>
            <p>Start with the biggest issues:</p>
            <ul>
                <li><strong>Does your story have a clear beginning, middle, and end?</strong></li>
                <li><strong>Are your character arcs complete and satisfying?</strong></li>
                <li><strong>Does each scene serve a purpose?</strong></li>
                <li><strong>Is the pacing appropriate for your genre?</strong></li>
                <li><strong>Are there any plot holes or inconsistencies?</strong></li>
            </ul>
            
            <h3>Character Development Check</h3>
            <p>Ensure your characters are fully developed:</p>
            <ul>
                <li>Do they have clear goals and motivations?</li>
                <li>Do they change and grow throughout the story?</li>
                <li>Are their actions consistent with their personalities?</li>
                <li>Do they have distinct voices and mannerisms?</li>
                <li>Are their relationships dynamic and interesting?</li>
            </ul>
            
            <h3>Pacing and Tension</h3>
            <p>Check your story's rhythm:</p>
            <ul>
                <li>Are there appropriate highs and lows?</li>
                <li>Does the tension build toward the climax?</li>
                <li>Are there quiet moments for character development?</li>
                <li>Do scenes end with hooks that keep readers turning pages?</li>
                <li>Is the resolution satisfying and earned?</li>
            </ul>
            
            <h3>Dialogue Editing</h3>
            <p>Polish your dialogue:</p>
            <ul>
                <li>Does each character have a distinct voice?</li>
                <li>Is the dialogue natural and purposeful?</li>
                <li>Are there any "on-the-nose" conversations?</li>
                <li>Does dialogue advance the plot or reveal character?</li>
                <li>Are dialogue tags varied and appropriate?</li>
            </ul>
            
            <h3>Language and Style</h3>
            <p>Refine your prose:</p>
            <ul>
                <li>Eliminate unnecessary words and phrases</li>
                <li>Vary sentence structure and length</li>
                <li>Choose precise, vivid words</li>
                <li>Balance showing and telling</li>
                <li>Create strong opening and closing sentences</li>
            </ul>
            
            <h3>Common Editing Issues</h3>
            <ul>
                <li><strong>Weak openings:</strong> Start with action, not exposition</li>
                <li><strong>Info dumps:</strong> Spread information throughout the story</li>
                <li><strong>Passive voice:</strong> Use active voice when possible</li>
                <li><strong>Adverb overuse:</strong> Show instead of telling with adverbs</li>
                <li><strong>Repetitive words:</strong> Use a thesaurus to find alternatives</li>
            </ul>
            
            <h3>Getting Feedback</h3>
            <p>After self-editing, seek outside perspectives:</p>
            <ul>
                <li>Join a critique group or writing workshop</li>
                <li>Find beta readers who read your genre</li>
                <li>Ask specific questions about areas you're unsure about</li>
                <li>Consider professional editing for final polish</li>
            </ul>
            
            <h3>Editing Tools and Techniques</h3>
            <ul>
                <li>Read your work aloud to catch awkward phrasing</li>
                <li>Use text-to-speech to hear your story</li>
                <li>Print your manuscript for a different perspective</li>
                <li>Use editing software to catch technical issues</li>
                <li>Create a style guide for consistency</li>
            </ul>
            
            <p>Remember: Editing is where good writing becomes great writing. Be patient with the process, and don't be afraid to make big changes if they serve your story. Every revision brings you closer to the story you want to tell.</p>
        `,
        tags: ['editing', 'revision', 'writing-craft'],
        image: 'images/The_Art_of_Editing_Transforming_Your_First_Draft_into_a_Polished_Manuscript_cover_16x9.jpg'
    },
    {
        id: 'show-dont-tell',
        title: 'Show, Don\'t Tell: The Golden Rule of Writing',
        excerpt: 'Master the art of showing your story through action, dialogue, and sensory details instead of simply telling readers what happens.',
        content: `
            <h2>Show, Don't Tell: The Golden Rule of Writing</h2>
            
            <p>"Show, don't tell" is perhaps the most important rule in writing. It's the difference between engaging, immersive storytelling and flat, boring prose. Here's how to master this essential technique.</p>
            
            <h3>What Does "Show, Don't Tell" Mean?</h3>
            <p>Instead of telling readers what to think or feel, show them through action, dialogue, and sensory details. Let them experience the story alongside your characters.</p>
            
            <h3>Showing vs. Telling Examples</h3>
            
            <h4>Telling:</h4>
            <p>"Sarah was angry."</p>
            
            <h4>Showing:</h4>
            <p>"Sarah's hands clenched into fists, her jaw tightening as she stared at the broken vase. 'How could you?' she whispered through gritted teeth."</p>
            
            <h3>Use Sensory Details</h3>
            <p>Engage all five senses to create vivid scenes:</p>
            <ul>
                <li><strong>Sight:</strong> Colors, shapes, movements, expressions</li>
                <li><strong>Sound:</strong> Voices, ambient noise, silence</li>
                <li><strong>Touch:</strong> Textures, temperatures, physical sensations</li>
                <li><strong>Taste:</strong> Flavors, textures in the mouth</li>
                <li><strong>Smell:</strong> Scents that evoke memories and emotions</li>
            </ul>
            
            <h3>Show Emotions Through Action</h3>
            <p>Instead of stating emotions, show them through behavior:</p>
            <ul>
                <li>Nervousness: Fidgeting, nail-biting, pacing</li>
                <li>Excitement: Bouncing, wide eyes, rapid speech</li>
                <li>Anger: Clenched fists, narrowed eyes, raised voice</li>
                <li>Sadness: Slumped shoulders, slow movements, quiet voice</li>
                <li>Fear: Trembling, rapid breathing, wide eyes</li>
            </ul>
            
            <h3>Use Dialogue to Show Character</h3>
            <p>Let characters reveal themselves through what they say and how they say it:</p>
            <ul>
                <li>Word choice reveals education and background</li>
                <li>Speech patterns show personality</li>
                <li>What they avoid saying reveals secrets</li>
                <li>How they respond to others shows relationships</li>
            </ul>
            
            <h3>Show Setting Through Action</h3>
            <p>Instead of describing a place, show characters interacting with it:</p>
            <ul>
                <li>Have characters touch, smell, or react to their environment</li>
                <li>Show how the setting affects their behavior</li>
                <li>Use weather and atmosphere to create mood</li>
                <li>Let the setting create obstacles or opportunities</li>
            </ul>
            
            <h3>Show Relationships Through Interaction</h3>
            <p>Demonstrate relationships through how characters behave around each other:</p>
            <ul>
                <li>Physical proximity and touch</li>
                <li>Shared glances and inside jokes</li>
                <li>How they speak to and about each other</li>
                <li>What they do for each other</li>
            </ul>
            
            <h3>Show Character Growth Through Change</h3>
            <p>Demonstrate character development through changed behavior:</p>
            <ul>
                <li>Show them making different choices</li>
                <li>Have them react differently to similar situations</li>
                <li>Show them learning from past mistakes</li>
                <li>Demonstrate new skills or confidence</li>
            </ul>
            
            <h3>When to Tell Instead of Show</h3>
            <p>Sometimes telling is more efficient:</p>
            <ul>
                <li>Transitional scenes that don't need detail</li>
                <li>Background information that's not crucial</li>
                <li>Time passing when nothing important happens</li>
                <li>Information that would be awkward to show</li>
            </ul>
            
            <h3>Practice Exercises</h3>
            <p>Improve your showing skills with these exercises:</p>
            <ul>
                <li>Write a scene showing a character's emotion without naming it</li>
                <li>Describe a setting through a character's actions</li>
                <li>Show a relationship through a brief interaction</li>
                <li>Write a scene where a character learns something new</li>
            </ul>
            
            <h3>Common Mistakes to Avoid</h3>
            <ul>
                <li><strong>Over-showing:</strong> Don't show every detail—focus on what matters</li>
                <li><strong>Purple prose:</strong> Don't overdo the sensory details</li>
                <li><strong>Ignoring pacing:</strong> Sometimes you need to tell to keep the story moving</li>
                <li><strong>Forgetting context:</strong> Make sure your showing serves the story</li>
            </ul>
            
            <p>Remember: The goal is to create an immersive experience for your readers. Show them the world through your characters' eyes, and let them draw their own conclusions about what's happening.</p>
        `,
        tags: ['show-dont-tell', 'writing-craft', 'storytelling'],
        image: 'images/Show_Dont_Tell_The_Golden_Rule_of_Writing_cover_16x9.jpg'
    },
    {
        id: 'writing-routine',
        title: 'Building a Sustainable Writing Routine That Works for You',
        excerpt: 'Discover how to create a writing habit that fits your lifestyle and helps you make consistent progress on your projects.',
        content: `
            <h2>Building a Sustainable Writing Routine That Works for You</h2>
            
            <p>A consistent writing routine is the foundation of any successful writing career. But creating a routine that works for you—and sticking to it—can be challenging. Here's how to build a sustainable writing practice.</p>
            
            <h3>Start Small</h3>
            <p>Don't try to write for hours every day right away. Start with a manageable goal:</p>
            <ul>
                <li>Begin with 15-30 minutes per day</li>
                <li>Set a word count goal (100-500 words)</li>
                <li>Focus on consistency over quantity</li>
                <li>Gradually increase your goals as you build the habit</li>
            </ul>
            
            <h3>Choose Your Best Time</h3>
            <p>Identify when you're most creative and alert:</p>
            <ul>
                <li><strong>Morning writers:</strong> Fresh mind, fewer distractions</li>
                <li><strong>Afternoon writers:</strong> Warmed up, more energy</li>
                <li><strong>Evening writers:</strong> Quiet time, creative flow</li>
                <li><strong>Night writers:</strong> Fewer interruptions, creative freedom</li>
            </ul>
            
            <h3>Create a Dedicated Writing Space</h3>
            <p>Set up an environment that supports your creativity:</p>
            <ul>
                <li>Choose a quiet, comfortable location</li>
                <li>Minimize distractions (phone, TV, social media)</li>
                <li>Have your writing tools easily accessible</li>
                <li>Make the space visually inspiring</li>
                <li>Consider lighting, temperature, and ergonomics</li>
            </ul>
            
            <h3>Establish Pre-Writing Rituals</h3>
            <p>Create habits that signal to your brain it's time to write:</p>
            <ul>
                <li>Make a cup of tea or coffee</li>
                <li>Light a candle or incense</li>
                <li>Listen to a specific playlist</li>
                <li>Do a brief meditation or stretching</li>
                <li>Review your previous day's work</li>
            </ul>
            
            <h3>Set Realistic Goals</h3>
            <p>Create goals that challenge you without overwhelming you:</p>
            <ul>
                <li>Daily word count targets</li>
                <li>Weekly writing sessions</li>
                <li>Monthly project milestones</li>
                <li>Quarterly writing achievements</li>
            </ul>
            
            <h3>Track Your Progress</h3>
            <p>Monitor your writing habits to stay motivated:</p>
            <ul>
                <li>Keep a writing journal</li>
                <li>Use apps to track word counts</li>
                <li>Create visual progress charts</li>
                <li>Celebrate small victories</li>
                <li>Review your progress regularly</li>
            </ul>
            
            <h3>Handle Life's Interruptions</h3>
            <p>Be flexible when life gets in the way:</p>
            <ul>
                <li>Have backup writing times</li>
                <li>Keep writing materials with you</li>
                <li>Use short writing sessions when time is limited</li>
                <li>Don't beat yourself up for missed days</li>
                <li>Get back on track as soon as possible</li>
            </ul>
            
            <h3>Find Your Writing Style</h3>
            <p>Experiment with different approaches:</p>
            <ul>
                <li><strong>Planners:</strong> Outline and research before writing</li>
                <li><strong>Pantsers:</strong> Write by the seat of your pants</li>
                <li><strong>Hybrids:</strong> Combine planning with discovery</li>
                <li><strong>Cyclical writers:</strong> Write in bursts with breaks</li>
            </ul>
            
            <h3>Build a Support System</h3>
            <p>Surround yourself with people who support your writing:</p>
            <ul>
                <li>Join writing groups or workshops</li>
                <li>Find a writing buddy or accountability partner</li>
                <li>Share your goals with family and friends</li>
                <li>Connect with other writers online</li>
                <li>Seek out mentors or writing coaches</li>
            </ul>
            
            <h3>Overcome Common Obstacles</h3>
            
            <h4>Lack of Time</h4>
            <ul>
                <li>Write during commutes or breaks</li>
                <li>Wake up 30 minutes earlier</li>
                <li>Use voice-to-text while doing other tasks</li>
                <li>Schedule writing like any other appointment</li>
            </ul>
            
            <h4>Lack of Motivation</h4>
            <ul>
                <li>Remember why you started writing</li>
                <li>Read work that inspires you</li>
                <li>Set smaller, achievable goals</li>
                <li>Reward yourself for meeting targets</li>
            </ul>
            
            <h4>Perfectionism</h4>
            <ul>
                <li>Allow yourself to write badly</li>
                <li>Focus on getting words on the page</li>
                <li>Save editing for later</li>
                <li>Remember that first drafts are supposed to be rough</li>
            </ul>
            
            <h3>Adapt Your Routine</h3>
            <p>Be willing to change your routine as your life changes:</p>
            <ul>
                <li>Adjust for new jobs or schedules</li>
                <li>Modify for family changes</li>
                <li>Update goals as you grow as a writer</li>
                <li>Experiment with new approaches</li>
            </ul>
            
            <h3>Long-term Sustainability</h3>
            <p>Create a routine that you can maintain for years:</p>
            <ul>
                <li>Balance writing with other life priorities</li>
                <li>Take breaks to prevent burnout</li>
                <li>Continue learning and growing</li>
                <li>Celebrate your progress and achievements</li>
                <li>Remember that writing is a marathon, not a sprint</li>
            </ul>
            
            <p>Remember: The best writing routine is the one you'll actually follow. Be patient with yourself as you build this habit, and don't be afraid to adjust your approach until you find what works for you.</p>
        `,
        tags: ['writing-routine', 'motivation', 'writing-tips'],
        image: 'images/Building_a_Sustainable_Writing_Routine_That_Works_for_You_cover_16x9.jpg'
    }
];

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    displayArticles();
    setupScrollAnimations();
});

// Display articles
function displayArticles(filteredArticles = articles) {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    
    filteredArticles.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
}

// Create article card
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card fade-in';
    card.onclick = () => navigateToArticle(article.id);
    
    card.innerHTML = `
        <div class="article-image">
            <img src="${article.image}" alt="${article.title}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, var(--primary-peach), var(--primary-mint))'; this.parentElement.innerHTML='<div style=\\'display: flex; align-items: center; justify-content: center; height: 100%; font-size: 3rem; color: var(--text-dark);\\'>📝</div>'">
        </div>
        <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-tags">
                ${article.tags.map(tag => `<a href="tags.html?tag=${tag}" class="tag">${tag.replace('-', ' ')}</a>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Navigate to article
function navigateToArticle(articleId) {
    window.location.href = `article.html?id=${articleId}`;
}

// Setup scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Handle article page
if (window.location.pathname.includes('article.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        const article = articles.find(a => a.id === articleId);
        if (article) {
            displayArticle(article);
        } else {
            window.location.href = 'index.html';
        }
    }
}

// Display article
function displayArticle(article) {
    document.title = `${article.title} - WriteWise`;
    
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="article-header">
                <div class="container">
                    <h1>${article.title}</h1>
                    <div class="article-meta">
                        <span>Writing Tips</span> • 
                        <span>${article.tags.map(tag => tag.replace('-', ' ')).join(', ')}</span>
                    </div>
                </div>
            </div>
            
            <div class="ad-placeholder ad-sidebar">
                <div class="ad-content">ADVERTISEMENT</div>
            </div>
            
            <div class="container">
                <article class="article-content-full">
                    ${article.content}
                </article>
                
                <div class="ad-placeholder ad-sidebar">
                    <div class="ad-content">ADVERTISEMENT</div>
                </div>
                
                <div class="article-tags" style="margin-top: 2rem;">
                    <strong>Tags:</strong>
                    ${article.tags.map(tag => `<a href="tags.html?tag=${tag}" class="tag">${tag.replace('-', ' ')}</a>`).join('')}
                </div>
            </div>
        `;
    }
}

// Handle tags page
if (window.location.pathname.includes('tags.html')) {
    displayTagsPage();
}

// Display tags page
function displayTagsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTag = urlParams.get('tag');
    
    if (selectedTag) {
        displayArticlesByTag(selectedTag);
    } else {
        displayAllTags();
    }
}

// Display articles by tag
function displayArticlesByTag(tag) {
    const filteredArticles = articles.filter(article => 
        article.tags.includes(tag)
    );
    
    document.title = `${tag.replace('-', ' ')} - WriteWise`;
    
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="articles-section">
                <div class="container">
                    <div class="section-header">
                        <h2>Articles tagged: "${tag.replace('-', ' ')}"</h2>
                        <a href="tags.html" class="search-btn">Back to All Tags</a>
                    </div>
                    <div class="articles-grid" id="articlesGrid"></div>
                </div>
            </div>
        `;
        
        displayArticles(filteredArticles);
    }
}

// Display all tags
function displayAllTags() {
    const tagCounts = {};
    articles.forEach(article => {
        article.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });
    
    const main = document.querySelector('main');
    if (main) {
        // Find the tags container or create one
        let tagsContainer = main.querySelector('.tags-container');
        if (!tagsContainer) {
            tagsContainer = document.createElement('div');
            tagsContainer.className = 'tags-container';
            main.appendChild(tagsContainer);
        }
        
        tagsContainer.innerHTML = `
            <div class="container">
                <div class="tags-grid">
                    ${Object.entries(tagCounts).map(([tag, count]) => `
                        <div class="tag-card" onclick="window.location.href='tags.html?tag=${tag}'">
                            <div class="tag-name">${tag.replace('-', ' ')}</div>
                            <div class="tag-count">${count} article${count !== 1 ? 's' : ''}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}
