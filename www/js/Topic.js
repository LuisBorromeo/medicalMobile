var Topic = (function () {
    function Topic(sourceElementId) {
        this.TopicId = sourceElementId;
        this.isActive = false;
        console.log("creates topic " + this.TopicId);
    }
    Topic.prototype.Toggle = function () {
        if(this.isActive == false) {
            this.isActive = true;
        } else {
            this.isActive = false;
        }
    };
    return Topic;
})();
var TopicCategory = (function () {
    function TopicCategory(categoryName, categoryElementId) {
        this.Topics = [];
        this.CategoryName = categoryName;
        this.CategoryElementId = categoryElementId;
    }
    TopicCategory.prototype.AddTopic = function (topic) {
        var topicExists = false;
        for(var i in this.Topics) {
            if(this.Topics[i].TopicId == topic) {
                topicExists = true;
            }
        }
        if(topicExists == false) {
            this.Topics[this.Topics.length++] = topic;
        }
    };
    TopicCategory.prototype.Toggle = function (topicId) {
        for(var i in this.Topics) {
            if(this.Topics[i].TopicId == topicId) {
                console.log("found the topic");
                this.Topics[i].Toggle();
            }
        }
    };
    TopicCategory.prototype.CategoryCount = function () {
        var activeCount = 0;
        for(var i in this.Topics) {
            if(this.Topics[i].isActive == true) {
                activeCount++;
            }
        }
        return activeCount;
    };
    return TopicCategory;
})();
//@ sourceMappingURL=Topic.js.map
