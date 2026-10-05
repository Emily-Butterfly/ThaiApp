package io.github.emilybutterfly.thaiapp;

import android.os.Bundle;
import androidx.activity.EdgeToEdge;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Inhalte bis unter Status- und Navigationsleiste zeichnen; die Abstände setzt das CSS (safe-area-inset).
        EdgeToEdge.enable(this);
    }
}
