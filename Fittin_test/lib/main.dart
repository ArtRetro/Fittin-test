import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_svg/flutter_svg.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with SingleTickerProviderStateMixin {
  final Color neonGreen = const Color(0xFF31F600);
  final Color darkBG = const Color(0xFF152123);
  final Color buttonBG = const Color(0xFF22383E);

  int navIndex = 2;
  int selectedButtonIndex = 2;

  final TextStyle textStyle = GoogleFonts.poppins();

  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 3),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: darkBG,
      bottomNavigationBar: CurvedNavigationBar(
        height: 65,
        backgroundColor: Colors.transparent,
        color: neonGreen,
        buttonBackgroundColor: Colors.transparent,
        animationDuration: const Duration(milliseconds: 350),
        animationCurve: Curves.easeInOut,
        index: navIndex,
        onTap: (i) => setState(() => navIndex = i),
        items: [
          navItem("home", 0),
          navItem("cards", 1),
          navItem("book", 2),
          navItem("profile", 3),
        ],
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 18),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 25),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Good Morning",
                        style: textStyle.copyWith(
                          color: Colors.white70,
                          fontSize: 16,
                        ),
                      ),
                      Text(
                        "Prem Kumar",
                        style: textStyle.copyWith(
                          color: neonGreen,
                          fontSize: 22,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  GestureDetector(
                    onTap: () {},
                    child: SizedBox(
                      width: 36,
                      height: 36,
                      child: SvgPicture.asset(
                        'assets/icons/category.svg',
                        color: neonGreen,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 18),


              Stack(
                children: [
                  ShimmerCard(width: 332.94, height: 205.26, controller: _controller, color: neonGreen),
                  Container(
                    width: 332.94,
                    height: 205.26,
                    padding: const EdgeInsets.all(24),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Mastercard",
                          style: textStyle.copyWith(
                            color: buttonBG,
                            fontSize: 15.55,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        const SizedBox(height: 18),
                        SvgPicture.asset(
                          'assets/icons/subtract.svg',
                          width: 35.44,
                          height: 26.86,
                        ),
                        const SizedBox(height: 18),
                        Text(
                          "5412   7512   3412   3456",
                          style: textStyle.copyWith(
                            color: buttonBG,
                            fontSize: 15.55,
                            fontWeight: FontWeight.w600,
                            letterSpacing: 1.5,
                          ),
                        ),
                        const Spacer(),
                        Align(
                          alignment: Alignment.bottomRight,
                          child: SvgPicture.asset(
                            'assets/icons/circles.svg',
                            width: 37.94,
                            height: 24.14,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 25),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  buildAnimatedButton(0, "send", "Send"),
                  buildAnimatedButton(1, "receive", "Receive"),
                  buildAnimatedButton(2, "history", "History"),
                  buildAnimatedButton(3, "more", "More"),
                ],
              ),
              const SizedBox(height: 30),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Transaction History",
                    style: textStyle.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                      fontSize: 18,
                    ),
                  ),
                  Text(
                    "More",
                    style: textStyle.copyWith(
                      color: Colors.white70,
                      fontSize: 14,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Expanded(
                child: ListView(
                  children: [
                    transactionTile("Paid to Ryan", "-\$46.23",
                        "Aug 22, 2021", Colors.redAccent),
                    transactionTile("Received from Luna", "+\$16.30",
                        "Aug 22, 2021", Colors.greenAccent),
                    transactionTile("Paid to Michael", "-\$49.23",
                        "Aug 19, 2021", Colors.redAccent),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget buildAnimatedButton(int index, String assetName, String label) {
    bool selected = selectedButtonIndex == index;

    return GestureDetector(
      onTap: () => setState(() => selectedButtonIndex = index),
      child: Column(
        children: [
          AnimatedScale(
            duration: const Duration(milliseconds: 300),
            scale: selected ? 1.15 : 1.0,
            curve: Curves.easeInOutBack,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 350),
              curve: Curves.easeInOutBack,
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: selected ? neonGreen : buttonBG,
                borderRadius: BorderRadius.circular(selected ? 18 : 14),
              ),
              child: SvgPicture.asset(
                'assets/icons/$assetName.svg',
                height: 37.9,
                width: 37.9,
                color: selected ? buttonBG : neonGreen,
              ),
            ),
          ),
          const SizedBox(height: 6),
          Text(label,
              style: textStyle.copyWith(
                  color: Colors.white,
                  fontSize: 13,
                  fontWeight: FontWeight.w500))
        ],
      ),
    );
  }

  Widget navItem(String assetName, int index) {
    bool isSelected = navIndex == index;

    return AnimatedRotation(
      turns: isSelected ? 1 : 0,
      duration: const Duration(milliseconds: 500),
      curve: Curves.easeInOutCubic,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 280),
        curve: Curves.easeOutBack,
        padding: const EdgeInsets.all(6),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: isSelected ? buttonBG : Colors.transparent,
          border: isSelected
              ? Border.all(color: neonGreen, width: 2)
              : null,
        ),
        child: SvgPicture.asset(
          'assets/icons/$assetName.svg',
          width: isSelected ? 32 : 24,
          color: isSelected ? neonGreen : buttonBG,
        ),
      ),
    );
  }

  Widget transactionTile(
      String name, String money, String date, Color color) {
    return Container(
      width: 311,
      height: 54.12,
      margin: const EdgeInsets.only(top: 12),
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: buttonBG,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(
        children: [
          const CircleAvatar(
            backgroundColor: Colors.white24,
            child: Icon(Icons.person, color: Colors.white, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name,
                    style: textStyle.copyWith(
                        color: Colors.white, fontSize: 13)),
                Text("11:23 pm  •  $date",
                    style: textStyle.copyWith(
                        color: Colors.white54, fontSize: 10)),
              ],
            ),
          ),
          Text(
            money,
            style: textStyle.copyWith(
                color: color, fontWeight: FontWeight.bold, fontSize: 13),
          ),
        ],
      ),
    );
  }
}

class ShimmerCard extends StatelessWidget {
  const ShimmerCard({super.key, required this.width, required this.height, required this.controller, required this.color});

  final double width;
  final double height;
  final AnimationController controller;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: controller,
      builder: (context, child) {
        final progress = Curves.easeInOutCubic.transform(controller.value);
        return CustomPaint(
          size: Size(width, height),
          painter: _ShimmerPainter(progress, color),
        );
      },
    );
  }
}

class _ShimmerPainter extends CustomPainter {
  final double progress;
  final Color color;
  _ShimmerPainter(this.progress, this.color);

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    final rRect = RRect.fromRectAndRadius(rect, const Radius.circular(22));

    final basePaint = Paint()..color = color;
    canvas.drawRRect(rRect, basePaint);

    final shimmerWidth = size.width * 0.4;
    final shimmerOffset = progress * (size.width + shimmerWidth) - shimmerWidth;

    final gradient = LinearGradient(
      colors: [
        Colors.white.withOpacity(0.0),
        Colors.white.withOpacity(0.7),
        Colors.white.withOpacity(0.0),
      ],
      stops: const [0.0, 0.5, 1.0],
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
    );

    final shimmerPaint = Paint()
      ..shader = gradient.createShader(Rect.fromLTWH(shimmerOffset, 0, shimmerWidth, size.height))
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6);

    canvas.drawRRect(rRect, shimmerPaint);
  }

  @override
  bool shouldRepaint(covariant _ShimmerPainter oldDelegate) => oldDelegate.progress != progress || oldDelegate.color != color;
}


