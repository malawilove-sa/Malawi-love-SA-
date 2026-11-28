import 'dart:io';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'supabase_client.dart';

class VipService {
  static Future<String> submitVipPayment({
    required String userId,
    required String userName,
    required String plan,
    required double amount,
    required File proofImage,
  }) async {
    final client = SupabaseClientHelper.client;

    // 1. Upload proof image
    final fileName = '${userId}_${DateTime.now().millisecondsSinceEpoch}.jpg';
    await client.storage.from('vip-proofs').upload(fileName, proofImage);

    final proofUrl = client.storage.from('vip-proofs').getPublicUrl(fileName);

    // 2. Save payment to table
    await client.from('vip_payments').insert({
      'user_id': userId,
      'user_name': userName,
      'plan': plan,
      'amount': amount,
      'proof_url': proofUrl,
      'status': 'pending',
    });

    return proofUrl;
  }
}
