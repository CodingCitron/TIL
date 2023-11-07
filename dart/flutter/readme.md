### StatelessWidget
- 

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Hello flutter!'),
        ),
        body: const Center(
            child: Text('Hello World!'),
        ),
      ),
    );
  }
}
```

### Scaffold
- 화면의 구조를 정의

[Widgets DOCS](https://docs.flutter.dev/ui/widgets)