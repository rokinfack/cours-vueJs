import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<String> courses = [
    'Tomate',
    'Banane',
    'Arachide',
    'Haricot',
    'Nutella',
    'Pain',
    'Papier de toilette',
    'Huile de palme',
    "Huile d'arachide",
    'Viande',
    'Buscuit',
    'Pomme de terre',
    'Mangues',
    'Noir de coco',
    'Coucous maîs',
    'Tomate',
    'Banane',
    'Arachide',
    'Haricot',
    'Nutella',
    'Pain',
    'Papier de toilette',
    'Huile de palme',
    "Huile d'arachide",
    'Viande',
    'Buscuit',
    'Pomme de terre',
    'Mangues',
    'Noir de coco',
    'Coucous maîs',
  ];
  List<Course> maListCourse = [];
  @override
  Widget build(BuildContext context) {
    final orientation = MediaQuery.of(context).orientation;
    print(orientation);
    courses.forEach((element) {
      maListCourse.add(Course(element));
    });
    return Scaffold(
      appBar: AppBar(
        title: const Text('learn how to use correctly List and Grild'),
      ),
      body:
          (orientation == Orientation.portrait) ? grildView() : listSeparated(),

      //

      // ListView.builder(
      //   itemCount: courses.length,
      //   itemBuilder: (context, index) {
      //     final element = courses[index];
      //     return elementToShow(element);
      //   },
      // ),
    );
  }

  Widget listSeparated() {
    return ListView.separated(
        itemBuilder: ((context, index) {
          return Dismissible(
            key: Key(maListCourse[index].element),
            child: tile(index),
            direction: DismissDirection.endToStart,
            background: Container(
              color: Colors.redAccent,
              margin: EdgeInsets.only(right: 8),
              child: Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Spacer(),
                  Text('swipe to delete de article in the list'),
                ],
              ),
            ),
            onDismissed: (direction) {
              setState(() {
                maListCourse.removeAt(index);
              });
            },
          );
        }),
        separatorBuilder: ((context, index) {
          return const Divider(
            thickness: 2,
            color: Colors.teal,
          );
        }),
        itemCount: courses.length);
  }

  Widget separated() {
    return ListView.builder(
      itemCount: courses.length,
      itemBuilder: (context, index) {
        final element = courses[index];
        return elementToShow(element);
      },
    );
  }

  List<Widget> itemCourses() {
    List<Widget> items = [];
    courses.forEach((element) {
      final widget = elementToShow(element);
      items.add(widget);
    });
    return items;
  }

  Widget grildView() {
    return GridView.builder(
      gridDelegate:
          SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
      itemBuilder: (context, index) {
        return InkWell(
          onTap: () {
            setState(() {
              maListCourse[index].update();
            });
          },
          child: Card(
            color: ((maListCourse[index].bought) ? Colors.green : Colors.red),
            child: Center(child: Text(maListCourse[index].element)),
          ),
        );
      },
      itemCount: maListCourse.length,
    );
  }

  Widget elementToShow(String element) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        mainAxisSize: MainAxisSize.max,
        children: [
          Text(element),
          Icon(Icons.check_box_outline_blank_outlined),
        ],
      ),
    );
  }

  ListTile tile(int index) {
    return ListTile(
      leading: Text(index.toString()),
      title: Text(maListCourse[index].element),
      trailing: IconButton(
        onPressed: () {
          setState(
            () {
              maListCourse[index].update();
            },
          );
        },
        icon: Icon((maListCourse[index].bought)
            ? Icons.check_box
            : Icons.check_box_outline_blank_outlined),
      ),
    );
  }
}

class Course {
  String element;
  bool bought = false;

  Course(this.element);

  update() {
    bought = !bought;
  }
}
