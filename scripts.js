$(function() {
    var data = [
    {
        id: 0,
        title: 'Original Quote',
        body: '“For God so loved the world (presents the God kind of love), that He gave His Only Begotten Son (gave Him up to the Cross, for that’s what it took to redeem humanity), that whosoever believes in Him should not perish, but have Everlasting Life.',
        author: 'Jimmmy Swaggart - The Expositor Study Bible'
    },
    {
        id: 1,
        title: 'Joy',
        body: '“For His anger endures but a moment; in His favour is life: weeping may endure for a night, but joy comes in the morning. (Many Saints of God have gathered strength from this Passage, and rightly so. But more pointedly, this points to Israel’s rebellion and God’s Anger. Even though His Anger against Israel has lasted now for some 2,500 years, in the light of eternity, the Holy Spirit calls it but “a moment.”',
        author: 'Jimmmy Swaggart - The Expositor Study Bible'
    },
    {
        id: 2,
        title: 'Love',
        body: '“Charity (love) suffers long (refers to patience), and is kind (represents the second side of the Divine attitude toward human kind); charity (the God kind of Love) envies not (does not want that which belongs to others); Love vaunts not itself (is never a braggart), is not puffed up (is not prideful), Does not behave itself unseemly (is forgetful of self and thoughtful of others), seeks not her own (is unselfish), is not easily provoked (is not embittered by abuse, insult, or injury), thinks no evil (takes no account of evil); Rejoices not in iniquity (never gossips about the misdeeds of others), but rejoices in the Truth (proclaims that which the Word of God identifies as Truth); Bears all things (never complains), believes all things (takes the kindest views of all men), hopes all things (keeps believing for the best), endures all things (puts up with everything).”',
        author: 'Jimmmy Swaggart - The Expositor Study Bible'
    },
    {
        id: 3,
        title: 'Peace',
        body: '“ Let your moderation (being satisfied with less than one’s due) be known unto all men (even our enemies). The Lord is at hand (is near; actually refers to the Rapture). Be careful for nothing (don’t worry about anything); but in everything by prayer and supplication (presents the cure for worry, which is believing prayer) with thanksgiving (takes in all God has done for us in the past, what He is doing at present, and shall do in the future) let your requests be made known unto God. (This speaks of all things, material, physical, and spiritual.) And the Peace of God (Sanctifying Peace), which passes all understanding (beyond the pale of human comprehension), shall keep your hearts and minds through Christ Jesus (through what Christ did at the Cross).”',
        author: 'Jimmmy Swaggart - The Expositor Study Bible'
    },
    {
        id: 4,
        title: 'Prosper',
        body: '“Beloved, I wish above all things that you may prosper (refers to financial prosperity, and should be the case for every Believer) and be in health (speaks of physical prosperity), even as your soul prospers (speaks of Spiritual Prosperity; so we have here the whole Gospel for the whole man).”',
        author: 'Jimmmy Swaggart - The Expositor Study Bible'
    },
    {
        id: 5,
        title: 'Knowledge',
        body: '“There is gold, and a multitude of rubies: but the lips of knowledge are a precious jewel. (The “knowledge” spoken of is that which comes exclusively from the Bible.)”',
        author: 'Jimmmy Swaggart - The Expositor Study Bible'
    }
];

var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');

function initPosts() {
    for (let i = 0; i < data.length; i++) {
        //Create elements
        var postId = 'post-' + data[i].id,
          $post = $('<section class="post"></section>'),
          $title = $('<h2 class="title"></h2>'),
          $body = $('<blockquote></blockquote>'),
          $author = $('<span class="author"></span>'), // Maybe?"half qoute on author?"
          $navItem = $('<li></li>');

          // Add post data
          $title.text(data[i].title);
          $body.text(data[i].body);
          $author.text(data[i].author);

            // Add nav item data

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            // Combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            // Add post and nav elements to page
            $posts.append($post);
            $nav.append($navItem);

            //Wire up nav item click event handler
            $navItem.on('click', function() {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            // Hide all posts and show the intro
            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();

    function get(element) {
        return document.getElementById(element);
    }
    
    // Aplication functions
    function openModal() {
        var modal = get('modal-dialog');
        var backdrop = get('modal-backdrop');
    
        modal.classList.add('visible');
        backdrop.classList.add('visible');
    }
    
    function closeModal() {
        var title = get('edit-title-text');
        var text = get('edit-content-text');
        var modal = get('modal-dialog');
        var backdrop = get('modal-backdrop');
    
        title.value = '';
        text.value = '';
    
        modal.classList.remove('visible')
        backdrop.classList.remove('visible');
    }
    
    function saveContent() {
        var title = get('edit-title-text');
        var text = get('edit-content-text');
        var content = get('display-content');
    
        var newTitle = document.createElement('h2');
        var newTitleText = document.createTextNode(title.value);
        var newContent = document.createElement('p');
        var newContentText = document.createTextNode(text.value);
    
        newTitle.appendChild(newTitleText);
        newContent.appendChild(newContentText);
        content.appendChild(newTitle);
        content.appendChild(newContent);
    
        closeModal();
    }
    
    window.addEventListener('load', function() {
        var newButton = get('new-button');
        var cancelButton = get('cancel-button');
        var saveButton = get('save-button');
    
        newButton.addEventListener('click', openModal);
        cancelButton.addEventListener('click', closeModal);
        saveButton.addEventListener('click', saveContent);
    });
});