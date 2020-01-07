//jshint esversion:6

class Graph {

  constructor() {
    this.numberOfVertices = 0;
    this.adjList = new Map();
  }
  addVertex(v){
    this.adjList.set(v,[]);
    this.numberOfVertices++;
  }
  addDirectedEdgeFromTo(v,w){
    this.adjList.get(v).push(w);//if it is undirected we add to both
    this.adjList.get(w).push(v);//undirected graph
  }
  printGraph(){
    for(var i of this.adjList.keys()){
      var str = "";
      for(var j of this.adjList.get(i)){
        str+=(j + " ");
      }
      console.log(i +'->' + str);
    }
  }
  bfs(startingNodeKey){

    var visited = {};
    var q = [];

    visited[startingNodeKey] = true;
    q.push(startingNodeKey);

    while(q.length>0){
      var currentlyVisiting = q.shift();
      console.log(currentlyVisiting);

      for(var i of this.adjList.get(currentlyVisiting)){
        var neighbor = i;

        if(!visited[neighbor]){
          visited[neighbor] = true;
          q.push(neighbor);
        }
      }
    }

  }

  RouteBetweenNodes(v,w){
    var visited = {};
    var q = [];

    visited[v] = true;
    q.push(v);

    while(q.length>0){
      var currentlyVisiting = q.shift();

      if(currentlyVisiting === w){
        return true;
      }

      for(var i of this.adjList.get(currentlyVisiting)){
        var neighbor = i;
        if(!visited[neighbor]){
          visited[neighbor] = true;
          q.push(neighbor);
        }

      }
    }

    return false;
  }



}

var test = new Graph();
var vertices = ['A','B','C','D','E','F'];

for(var i of vertices){
  test.addVertex(i);
}

test.addDirectedEdgeFromTo('A', 'B');
test.addDirectedEdgeFromTo('A', 'D');
test.addDirectedEdgeFromTo('A', 'E');
test.addDirectedEdgeFromTo('B', 'C');
test.addDirectedEdgeFromTo('D', 'E');
test.addDirectedEdgeFromTo('E', 'F');
test.addDirectedEdgeFromTo('E', 'C');
test.addDirectedEdgeFromTo('C', 'F');

test.addVertex('G');
test.addDirectedEdgeFromTo('F', 'G');

test.printGraph();

console.log('BFS');
test.bfs('A');
console.log(test.RouteBetweenNodes('A','G'));
