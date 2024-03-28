DOKUMENTATION

Ziel

Wir (Catrina und Lara) hatten im Modul 288 die Aufgabe ein Spiel mit HTML und JavaScript zu entwerfen, welches funktioniert und mindestens 2 Seiten hatte. Entschieden hatten wir uns für ein Snake Game, welches Ein Gesicht eines LPs als Snake Kopf und unsere «Typischen» Snacks als die Felder zum Essen hatte.
HTML-Struktur

Unser Html definiert für uns die Struktur und enthält die erforderlichen Elemente für das Spiel. Die wichtigsten Elemente sind:
•	Ein DIV-Container für die Startseite mit dem Titel "Snake Game" und einem Startbutton.
•	Ein Canvas-Element, auf dem das Spiel dargestellt wird.
•	Ein Button zum Neu laden des Spiels.
•	Ein Container für die Anzeige des Punktestands und des Highscores.
CSS-Styling

CSS verwendeten wir, um das ganze ansprechender zu gestalten. Folgende Stilregeln werden angewendet:
•	Zentrierung der Inhalte auf der Seite mit Flexbox.
•	Festlegung von Schriftarten, Farben und Abständen für eine ansprechende Darstellung.
•	Rahmen um das Canvas-Element für visuelle Abgrenzung.
JavaScript-Logik

Die Spiellogik konnten wir in JavaScript implementieren und somit beispielsweise einstellen, dass wenn die Schlange sich selbst oder die Wand berührt das Spiel fertig ist. Die wichtigsten Funktionen und Variablen sind:
•	canvas und ctx: Referenzen auf das Canvas-Element und den 2D-Kontext für das Zeichnen.
•	snake und food: Arrays, die die Positionen der Schlange und der Nahrung speichern.
•	direction: Die aktuelle Bewegungsrichtung der Schlange.
•	gameOver: Eine Variable, die den Spielzustand speichert.
•	speed: Die Geschwindigkeit, mit der sich die Schlange bewegt.
•	score und highscore: Variablen zur Verfolgung des Punktestands und des Highscores.

Spielablauf

Das Spiel startet, wenn der Benutzer auf den Startbutton klickt. Die Schlange bewegt sich automatisch in die gewählte Richtung. Der Spieler kann die Richtung mithilfe der Pfeiltasten ändern. Wenn die Schlange Nahrung frisst, erhöht sich der Punktestand, und die Schlange wächst. Das Spiel endet, wenn die Schlange mit sich selbst oder den Spielfeldgrenzen kollidiert.
Funktionen
•	startGame(): Startet das Spiel und initialisiert die Spielschleife.
•	reloadGame(): Setzt das Spiel zurück und startet es erneut.
•	draw(): Zeichnet die Schlange, die Nahrung und den Punktestand auf dem Canvas.
•	moveSnake(): Bewegt die Schlange entsprechend der aktuellen Richtung.
•	eatFood(): Aktualisiert den Punktestand und die Position der Nahrung, wenn die Schlange diese frisst.
•	updateHighscore(): Aktualisiert den Highscore im lokalen Speicher.
•	increaseSpeed(): Erhöht die Geschwindigkeit des Spiels, wenn die Schlange Nahrung frisst.
•	checkCollision(): Überprüft auf Kollisionen mit der Schlange selbst und den Spielfeldgrenzen.
Zusammenfassung

Die Implementierung des Snake-Spiels erfolgt durch die Integration von HTML, CSS und JavaScript. Das Spiel bietet eine unterhaltsame Erfahrung für den Benutzer mit einer intuitiven Benutzeroberfläche und herausfordernden Spielmechaniken, indem die Snake auch immer schneller wird.

5 Test-Cases

Startbildschirm:
Funktioniert der Startbutton? 
Ja der Startbutton funktioniert
Spielmechanik:
Funktioniert die Steuerung?
Ja die Steuerung mit den Pfeiltasten funktioniert einwandfrei.
Spielumgebung:
Wechselt das "Futter" nach jedem fressen den Platz?
Ja diese Funktion funktioniert.
Spielablauf:
Wird das spiel schneller umso mehr Punkte man hat?
Ja es wird schneller.
Code:
Ist der Code fehlerfrei?
Ja, der Code weist keine Fehler auf.

