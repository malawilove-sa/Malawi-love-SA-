
import 'package:supabase_flutter/supabase_flutter.dart';

class SupabaseClientHelper {
  static Future<void> init() async {
    await Supabase.initialize(
      url: 'https://cotocofslfhcmeyklzrb.supabase.co',
      anonKey: 'sb_publishable_1Pm9aAvMes7qoie_A4FVTw_yCwX9a_R',
    );
  }
  static SupabaseClient get client => Supabase.instance.client;
}
