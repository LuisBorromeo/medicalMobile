interface iTopic {
    TopicId : string;
    isActive : bool;

    Toggle();
}

class Topic implements iTopic {
    TopicId : string;
    isActive : bool;

    constructor(sourceElementId :string){
        this.TopicId = sourceElementId;
        this.isActive = false;

        console.log("creates topic " + this.TopicId);
    }

    public Toggle(){
        if (this.isActive == false){
            this.isActive = true;
        } else {
            this.isActive = false;
        }
    }
}

interface iTopicCategory
{
    Topics : iTopic[];

    AddTopic(topic :iTopic);
    CategoryCount();
    Toggle(topicId :string);
}

class TopicCategory implements iTopicCategory {
    Topics : iTopic[];
    CategoryName: string;
    CategoryElementId: string;

    constructor(categoryName :string, categoryElementId :string ){
        this.Topics = [];
        this.CategoryName = categoryName;
        this.CategoryElementId = categoryElementId;
    }

    AddTopic(topic :iTopic){

        var topicExists :bool = false;

        for (var i in this.Topics) {
            if (this.Topics[i].TopicId == topic ) {
                topicExists = true;
            }
        }

        if (topicExists == false)
        {
            this.Topics[this.Topics.length++] = topic;
        }

    }

    Toggle(topicId :string){

        for (var i in this.Topics) {
            //console.log(this.Topics[i].TopicId)
            if ( this.Topics[i].TopicId == topicId) {
                console.log("found the topic");

                this.Topics[i].Toggle();
            }
        }

    }

    CategoryCount()
    {
        var activeCount :number = 0;

        for (var i in this.Topics) {
            if ( this.Topics[i].isActive == true ) {
                activeCount++;
            }
        }

        //console.log("active count" + activeCount);

        return activeCount;
    }
}

